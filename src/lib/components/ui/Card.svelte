<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		title?: string;
		description?: string;
		/** Optional icon, e.g. `{#snippet icon()}<Zap class="size-5" />{/snippet}`. */
		icon?: Snippet;
		/** Extra content below the description. */
		children?: Snippet;
	};

	let { title, description, icon, children, class: className = '', ...rest }: Props = $props();
</script>

<article
	class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 {className}"
	{...rest}
>
	{#if icon}
		<div
			class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400"
		>
			{@render icon()}
		</div>
	{/if}
	{#if title}
		<h3 class="text-lg font-semibold">{title}</h3>
	{/if}
	{#if description}
		<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
	{/if}
	{@render children?.()}
</article>
