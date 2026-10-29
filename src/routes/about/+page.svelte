<script lang="ts">
	import Card from '#lib/components/ui/Card.svelte';
	import Container from '#lib/components/ui/Container.svelte';
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import Seo from '#lib/components/ui/Seo.svelte';
	import { m } from '#lib/paraglide/messages.js';
</script>

<Seo title={m.about_title()} description={m.about_description()} />
<PageHeader title={m.about_title()} subtitle={m.about_subtitle()} />

<section class="py-12">
	<Container class="grid gap-6 md:grid-cols-2">
		<Card title={m.about_stack_title()} description={m.about_stack_body()} />
		<Card title={m.about_customize_title()} description={m.about_customize_body()} />
	</Container>
</section>
