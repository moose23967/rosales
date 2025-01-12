import type { CommandGroup } from '../../components/command-group';
import { startCommand } from './start';

export const serverCommandGroup: CommandGroup = {
	expression: 'server',
	commands: [startCommand],
};
