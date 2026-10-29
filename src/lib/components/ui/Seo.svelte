<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/config/site.js';
	import { deLocalizeHref, locales, localizeHref } from '#lib/paraglide/runtime.js';

	type Props = { title: string; description?: string };

	let { title, description }: Props = $props();

	const fullTitle = $derived(`${title} · ${site.name}`);
	const path = $derived(deLocalizeHref(page.url.pathname));
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta property="og:title" content={fullTitle} />
	<meta property="og:site_name" content={site.name} />
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	<!-- Tells search engines about each translated version of this page -->
	{#each locales as locale (locale)}
		<link rel="alternate" hreflang={locale} href={site.url + localizeHref(path, { locale })} />
	{/each}
</svelte:head>
