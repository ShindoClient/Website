<script lang="ts">

    import {ArrowRight, Blocks, EighthNotes, Star, Zap} from '@lucide/svelte';
    import Button from '#lib/components/ui/Button.svelte';
    import Card from '#lib/components/ui/Card.svelte';
    import Container from '#lib/components/ui/Container.svelte';
    import Seo from '#lib/components/ui/Seo.svelte';
    import {m} from '#lib/paraglide/messages.js';
</script>

<Seo title={m.home_title()} description={m.home_description()}/>

<!-- Hero -->
<section class="py-20 sm:py-28">
    <Container size="md" class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {m.home_hero_title()}
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {m.home_hero_subtitle()}
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/download" size="lg">
                {m.home_cta_primary()}
                <ArrowRight class="size-5"/>
            </Button>
            <Button href="/about" variant="secondary" size="lg">{m.home_cta_secondary()}</Button>
        </div>
    </Container>
</section>

<!-- Features -->
<section class="pb-24">
    <Container>
        <h2 class="mb-8 text-center text-2xl font-semibold">{m.home_features_title()}</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title={m.feature_performance_title()} description={m.feature_performance_description()}>
                {#snippet icon()}
                    <Star class="size-5"/>
                {/snippet}
            </Card>
            <Card title={m.feature_lightweight_title()} description={m.feature_lightweight_description()}>
                {#snippet icon()}
                    <Zap class="size-5"/>
                {/snippet}
            </Card>
            <Card title={m.feature_spotify_title()} description={m.feature_spotify_description()}>
                {#snippet icon()}
                    <EighthNotes class="size-5"/>
                {/snippet}
            </Card>
            <Card title={m.feature_more_title()} description={m.feature_more_description()}>
                {#snippet icon()}
                    <Blocks class="size-5"/>
                {/snippet}
            </Card>
        </div>
    </Container>
</section>
