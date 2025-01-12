import type { CommandGroup } from '../../components/command-group';
import { creatingCommand } from './creating';
import { deletingCommand } from './deleting';
import { identifierUpdatingCommand } from './identifier-updating';
import { readingCommand } from './reading';
import { valueUpdatingCommand } from './value-updating';

export const clientCommandGroup: CommandGroup = {
	expression: 'client',
	commands: [
		creatingCommand,
		deletingCommand,
		identifierUpdatingCommand,
		readingCommand,
		valueUpdatingCommand,
	],
};
