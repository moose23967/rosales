import type { Command } from '../../components/command';

export const valueUpdatingCommand: Command = {
	expression: 'update-value',
	options: [
		{
			expression: '--identifier',
			key: 'identifier',
			required: true,
		},
		{
			expression: '--new-value',
			key: 'newValue',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const identifier = parsedOptions.identifier;
		const newValue = parsedOptions.newValue;

		if (!identifier || !newValue) return;

		const response = await client.value.patch(undefined, {
			query: { identifier, newValue },
		});
		const responseData = response.data;

		if (!responseData) return;
		if (responseData.type !== 'ok') return;

		console.log('Updated');
	},
};
