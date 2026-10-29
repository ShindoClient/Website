<script lang="ts">
	import { page } from '$app/state';
	import Languages from '@lucide/svelte/icons/languages';
	import { localeLabels } from '#lib/config/site.js';
	import { m } from '#lib/paraglide/messages.js';
	import { deLocalizeHref, getLocale, locales, localizeHref } from '#lib/paraglide/runtime.js';

	const current = $derived(getLocale());
	// Current page without locale prefix (keeps the query string)
	const path = $derived(deLocalizeHref(page.url.pathname) + page.url.search);
</script>

<nav class="flex items-center gap-1" aria-label={m.language_switcher_label()}>
	<Languages class="size-4 text-zinc-500" aria-hidden="true" />
	{#each locales as locale (locale)}
		<!-- data-sveltekit-reload: full page load so every message re-renders in the new language -->
		<a
			href={localizeHref(path, { locale })}
			data-sveltekit-reload
			hreflang={locale}
			lang={locale}
			title={localeLabels[locale].name}
			aria-current={locale === current ? 'true' : undefined}
			class="rounded px-2 py-1 text-sm font-medium transition-colors
				{locale === current
				? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
				: 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}"
		>
			{localeLabels[locale].short}
		</a>
	{/each}
</nav>
