<script lang="ts">
	import { navItems, site } from '#lib/config/site.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import Container from '../ui/Container.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mt-auto border-t border-zinc-200 py-8 dark:border-zinc-800">
	<Container class="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
		<div class="text-center sm:text-left">
			<p class="text-zinc-600 dark:text-zinc-400">{m.footer_rights({ year, name: site.name })}</p>
			<p class="mt-1 text-zinc-500">{m.footer_built_with()}</p>
		</div>
		<nav class="flex gap-4">
			{#each navItems as item (item.href)}
				<a
					href={localizeHref(item.href)}
					class="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				>
					{item.label()}
				</a>
			{/each}
		</nav>
	</Container>
</footer>
