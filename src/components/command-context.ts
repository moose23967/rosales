import type { Client } from '../client';
import type { Server } from '../server';

export interface CommandContext {
	client: Client;
	server: Server;
	parsedOptions?: Record<string, string | undefined>;
}
