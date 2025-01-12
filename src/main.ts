import { argv } from 'bun';
import { Client } from './client';
import { commandGroups } from './commands/groups';
import type { Command } from './components/command';
import type { CommandGroup } from './components/command-group';
import { server } from './server';

let declaredCommandGroup: CommandGroup | undefined = undefined;

for (const commandGroup of commandGroups) {
	if (!argv.includes(commandGroup.expression)) continue;

	declaredCommandGroup = commandGroup;
}

if (!declaredCommandGroup) {
	console.log('Please declare command group');

	process.exit(1);
}

let declaredCommand: Command | undefined = undefined;

for (const command of declaredCommandGroup.commands) {
	if (!argv.includes(command.expression)) continue;

	declaredCommand = command;
}

if (!declaredCommand) {
	console.log('Please declare command');

	process.exit(1);
}

let parsedCommandOptions: Record<string, string | undefined> | undefined =
	undefined;

if (declaredCommand.options) {
	parsedCommandOptions = {};

	for (const option of declaredCommand.options) {
		const optionExpression = option.expression;

		let parsedOptionValue: string | undefined = undefined;

		if (!argv.includes(optionExpression)) {
			if (!option.required) {
				parsedOptionValue = option.defaultValue;
			} else {
				console.log(`Option ${optionExpression} is requied`);

				process.exit(1);
			}
		} else {
			parsedOptionValue = argv[argv.indexOf(optionExpression) + 1];
		}

		parsedCommandOptions[option.key] = parsedOptionValue;
	}
}

const client = new Client();

await declaredCommand.callback({
	client,
	server,
	parsedOptions: parsedCommandOptions,
});
