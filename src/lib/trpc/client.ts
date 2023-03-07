import type { Router } from '$lib/trpc/router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

// Notice the <AppRouter> generic here.
export const trpc = createTRPCProxyClient<Router>({
	links: [
		httpBatchLink({
			url: 'http://localhost:5173/trpc',
		}),
	],
});
