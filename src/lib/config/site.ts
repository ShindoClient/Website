import type { Locale } from '#lib/paraglide/runtime.js';
import { m } from '#lib/paraglide/messages.js';

/** Basic site info. Used by the navbar, footer and SEO tags. */
export const site = {
	name: 'My Site',
	/** Production URL, used for canonical/alternate links. No trailing slash. */
	url: 'https://example.com'
};

/** Main navigation. `href` must be a path without a locale prefix. */
export const navItems = [
	{ href: '/', label: () => m.nav_home() },
	{ href: '/about', label: () => m.nav_about() }
] as const;

/**
 * Display name of each language, shown in the language switcher.
 * Typed as Record<Locale, ...>: adding a locale in project.inlang/settings.json
 * makes TypeScript require its label here.
 */
export const localeLabels: Record<Locale, { short: string; name: string }> = {
	en: { short: 'EN', name: 'English' },
	'pt-br': { short: 'PT', name: 'Português (BR)' }
};
