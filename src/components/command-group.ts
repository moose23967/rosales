import type { Command } from './command';

export interface CommandGroup {
	expression: string;
	commands: Command[];
}
