import type { CommandContext } from './command-context';
import type { CommandOption } from './command-option';

export interface Command {
	expression: string;
	options?: CommandOption[];
	callback: (context: CommandContext) => Promise<void>;
}
