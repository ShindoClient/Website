<script lang="ts">
	import Container from './Container.svelte';

	type Props = { title: string; subtitle?: string };

	let { title, subtitle }: Props = $props();
</script>

<header class="border-b border-zinc-200 py-12 dark:border-zinc-800">
	<Container>
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
		{#if subtitle}
			<p class="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
		{/if}
	</Container>
</header>
