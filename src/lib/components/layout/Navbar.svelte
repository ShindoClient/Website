<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Menu from '@lucide/svelte/icons/menu';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import X from '@lucide/svelte/icons/x';
	import { navItems, site } from '#lib/config/site.js';
	import { m } from '#lib/paraglide/messages.js';
	import { deLocalizeHref, localizeHref } from '#lib/paraglide/runtime.js';
	import Container from '../ui/Container.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	let open = $state(false);

	// Close the mobile menu after navigating
	afterNavigate(() => (open = false));

	const currentPath = $derived(deLocalizeHref(page.url.pathname));
	const isActive = (href: string) =>
		href === '/' ? currentPath === '/' : currentPath.startsWith(href);
</script>

<header
	class="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80"
>
	<Container class="flex h-16 items-center justify-between gap-4">
		<a href={localizeHref('/')} class="flex items-center gap-2 font-semibold">
			<Sparkles class="size-5 text-orange-500" aria-hidden="true" />
			{site.name}
		</a>

		<!-- Desktop navigation -->
		<nav class="hidden items-center gap-1 md:flex">
			{#each navItems as item (item.href)}
				<a
					href={localizeHref(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
					class="rounded-lg px-3 py-2 text-sm font-medium transition-colors
						{isActive(item.href)
						? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
						: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'}"
				>
					{item.label()}
				</a>
			{/each}
			<div class="ml-2 border-l border-zinc-200 pl-3 dark:border-zinc-800">
				<LanguageSwitcher />
			</div>
		</nav>

		<!-- Mobile menu button -->
		<button
			type="button"
			class="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
			aria-expanded={open}
			aria-controls="mobile-menu"
			aria-label={open ? m.nav_close_menu() : m.nav_open_menu()}
			onclick={() => (open = !open)}
		>
			{#if open}
				<X class="size-5" />
			{:else}
				<Menu class="size-5" />
			{/if}
		</button>
	</Container>

	<!-- Mobile navigation -->
	{#if open}
		<div id="mobile-menu" class="border-t border-zinc-200 md:hidden dark:border-zinc-800">
			<Container class="flex flex-col gap-1 py-3">
				{#each navItems as item (item.href)}
					<a
						href={localizeHref(item.href)}
						aria-current={isActive(item.href) ? 'page' : undefined}
						class="rounded-lg px-3 py-2 font-medium
							{isActive(item.href) ? 'bg-zinc-100 dark:bg-zinc-800' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}"
					>
						{item.label()}
					</a>
				{/each}
				<div class="px-3 pt-2">
					<LanguageSwitcher />
				</div>
			</Container>
		</div>
	{/if}
</header>
