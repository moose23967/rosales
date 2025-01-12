import type { Command } from '../../components/command';

export const creatingCommand: Command = {
	expression: 'create',
	options: [
		{
			expression: '--identifier',
			key: 'identifier',
			required: true,
		},
		{
			expression: '--value',
			key: 'value',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const identifier = parsedOptions.identifier;
		const value = parsedOptions.value;

		if (!identifier || !value) return;

		await client.index.post(undefined, {
			query: {
				identifier,
				value,
			},
		});
	},
};
