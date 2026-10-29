<script lang="ts">
	import { page } from '$app/state';
	import Button from '#lib/components/ui/Button.svelte';
	import Container from '#lib/components/ui/Container.svelte';
	import Seo from '#lib/components/ui/Seo.svelte';
	import { m } from '#lib/paraglide/messages.js';

	const notFound = $derived(page.status === 404);
	const title = $derived(notFound ? m.error_not_found_title() : m.error_generic_title());
	const body = $derived(notFound ? m.error_not_found_body() : m.error_generic_body());
</script>

<Seo {title} />

<section class="py-24">
	<Container size="sm" class="text-center">
		<p class="text-6xl font-bold text-orange-500">{page.status}</p>
		<h1 class="mt-4 text-3xl font-bold">{title}</h1>
		<p class="mt-3 text-zinc-600 dark:text-zinc-400">{body}</p>
		<Button href="/" class="mt-8">{m.error_back_home()}</Button>
	</Container>
</section>
