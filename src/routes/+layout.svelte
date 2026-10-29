<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import './layout.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-orange-600 focus:px-4 focus:py-2 focus:text-white"
>
	{m.nav_skip_to_content()}
</a>

<div
	class="flex min-h-screen flex-col bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100"
>
	<Navbar />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
