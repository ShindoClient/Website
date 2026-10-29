<script lang="ts">
    import {Download, Info} from '@lucide/svelte';
    import {m} from '#lib/paraglide/messages.js';
    import Card from '#lib/components/ui/Card.svelte';
    import Container from '#lib/components/ui/Container.svelte';
    import PageHeader from '#lib/components/ui/PageHeader.svelte';
    import Seo from '#lib/components/ui/Seo.svelte';

    const minecraftVersion = '1.8.9';
    const downloadUrl: string | undefined = undefined;
</script>

<Seo title={m.download_title()} description={m.download_description()}/>
<PageHeader title={m.download_title()} subtitle={m.download_description()} class="text-center"/>

<section class="py-8">

    <Container>
        <div class="mx-auto max-w-2xl">
            <Card padding="md">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div class="space-y-2">
                        <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                            Shindo Client
                        </h2>

                        <p class="text-sm text-zinc-500">
                            {m.download_minecraft_version({version: minecraftVersion})}
                        </p>

                        <p class="text-sm text-zinc-600 dark:text-zinc-400">
                            {m.download_hero_description()}
                        </p>
                    </div>

                    {#if downloadUrl}
                        <a
                                href={downloadUrl}
                                class="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                        >
                            <Download class="size-4" aria-hidden="true"/>
                            {m.download_button()}
                        </a>
                    {:else}
						<span
                                class="inline-flex shrink-0 items-center justify-center rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                        >
							{m.download_coming_soon()}
						</span>
                    {/if}
                </div>
            </Card>

            <p class="mt-3 text-sm text-zinc-500">
                <Info class="mr-1 inline size-4 align-text-bottom" aria-hidden="true"/>
                {m.download_note_description()}
            </p>
        </div>
    </Container>
</section>