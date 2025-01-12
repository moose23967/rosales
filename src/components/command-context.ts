import type { treaty } from '@elysiajs/eden';
import type { Server } from '../server';

export interface CommandContext {
	client: ReturnType<typeof treaty<Server>>;
	server: Server;
	parsedOptions?: Record<string, string | undefined>;
}
