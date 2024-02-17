import * as articleCommands from './article';
import * as commentsCommands from './comments';
import * as commonCommands from './common';
import * as profileCommands from './profile';
import * as ratingCommands from './rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);
