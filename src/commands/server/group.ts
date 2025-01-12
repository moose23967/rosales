import type { CommandGroup } from '../../components/command-group';
import { serverStartCommand } from './start';

export const serverCommandGroup: CommandGroup = {
	expression: 'server',
	commands: [serverStartCommand],
};
