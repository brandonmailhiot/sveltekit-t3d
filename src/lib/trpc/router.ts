import type { Context } from '$lib/trpc/context';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.input(z.string().optional()).query(({ input }) => {
		return input;
	}),
});

export type Router = typeof router;
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
