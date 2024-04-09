import {
  JsxAttribute, Node, Project, SyntaxKind,
} from 'ts-morph';

const project = new Project({});

const featureToRemove = process.argv[2]; // example: isArticleCommentsEnabled
const featureState = process.argv[3]; // example: on/off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeature';

if (!featureToRemove) {
  throw new Error(
    'Please, specify the feature flag, e.g. isArticleCommentsEnabled',
  );
}

if (!featureState) {
  throw new Error('Please, specify the state of feature flag, e.g. on/off');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Invalid feature state. Valid flags are on/off');
}

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/!(*.test).tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node): boolean {
  let isToggleFeatures = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier)
      && child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

function isToggleComponent(node: Node): boolean {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleComponentName;
}

function replaceToggleFunction(node: Node) {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );

  if (!objectOptions) return;

  const onProperty = objectOptions.getProperty('on');
  const offProperty = objectOptions.getProperty('off');
  const featureNameProperty = objectOptions.getProperty('name');

  const on = onProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const off = offProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== featureToRemove) return;

  if (featureState === 'on') {
    node.replaceWithText(on?.getBody().getText() ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(off?.getBody().getText() ?? '');
  }
}

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) => jsxAttributes.find((node) => node.getName() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1);

  if (featureName !== featureToRemove) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((sourceFile) => {
  // eslint-disable-next-line consistent-return
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      return replaceToggleFunction(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement)
      && isToggleComponent(node)
    ) {
      return replaceComponent(node);
    }
  });
});

project.save();
