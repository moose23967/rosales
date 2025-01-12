import type { Command } from '../../components/command';

export const serverStartCommand: Command = {
	expression: 'start',
	options: [
		{
			expression: '--port',
			key: 'port',
			required: false,
			defaultValue: '3000',
		},
	],
	callback: async ({ server, parsedOptions }) => {
		if (!parsedOptions) return;

		const port = parsedOptions.port;

		if (!port) return;

		server.listen(port);
	},
};