<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { localizeHref } from '#lib/paraglide/runtime.js';

	type Props = HTMLAttributes<HTMLElement> & {
		/** When set, renders a link. Internal paths ("/about") are localized automatically. */
		href?: string;
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		children: Snippet;
	};

	let {
		href,
		variant = 'primary',
		size = 'md',
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const isInternal = $derived(href?.startsWith('/') && !href.startsWith('//'));
	const resolvedHref = $derived(href && isInternal ? localizeHref(href) : href);

	const base =
		'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500';
	const variants = {
		primary: 'bg-orange-600 text-white hover:bg-orange-500',
		secondary:
			'border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800',
		ghost: 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
	};
	const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	href={resolvedHref}
	type={href ? undefined : 'button'}
	rel={href && !isInternal ? 'noopener noreferrer' : undefined}
	class="{base} {variants[variant]} {sizes[size]} {className}"
	{...rest}
>
	{@render children()}
</svelte:element>
