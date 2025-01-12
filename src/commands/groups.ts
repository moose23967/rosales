import type { CommandGroup } from '../components/command-group';
import { clientCommandGroup } from './client/group';
import { serverCommandGroup } from './server/group';

export const commandGroups: CommandGroup[] = [
	clientCommandGroup,
	serverCommandGroup,
];
