<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		/** Max width of the content area. */
		size?: 'sm' | 'md' | 'lg';
		children: Snippet;
	};

	let { size = 'lg', class: className = '', children, ...rest }: Props = $props();

	const sizes = { sm: 'max-w-2xl', md: 'max-w-4xl', lg: 'max-w-6xl' };
</script>

<div class="mx-auto w-full px-4 sm:px-6 {sizes[size]} {className}" {...rest}>
	{@render children()}
</div>
