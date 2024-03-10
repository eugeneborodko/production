import { Node, Project, SyntaxKind } from 'ts-morph';

const project = new Project({});

const featureToRemove = process.argv[2]; // example: isArticleCommentsEnabled
const featureState = process.argv[3]; // example: on/off

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
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node): boolean {
  let isToggleFeatures = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier)
      && child.getText() === 'toggleFeatures'
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
      );

      if (!objectOptions) return;

      const onProperty = objectOptions.getProperty('on');
      const offProperty = objectOptions.getProperty('off');
      const featureNameProperty = objectOptions.getProperty('name');

      const on = onProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const off = offProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
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
  });
});

project.save();
