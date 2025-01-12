import type { Command } from '../../components/command';

export const deletingCommand: Command = {
	expression: 'delete',
	options: [
		{
			expression: '--identifier',
			key: 'identifier',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const identifier = parsedOptions.identifier;

		if (!identifier) return;

		await client.index.delete(undefined, { query: { identifier } });
	},
};
