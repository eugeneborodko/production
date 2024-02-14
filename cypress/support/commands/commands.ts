import * as articleCommands from './article';
import * as commonCommands from './common';
import * as profileCommands from './profile';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
