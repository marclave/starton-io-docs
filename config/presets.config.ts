/*
| Developed by Starton
| Filename : presets.config.js
*/

import type * as Preset from '@docusaurus/preset-classic'
import { EnumChangefreq } from 'sitemap/dist/lib/types'
import type { PresetConfig } from '@docusaurus/types'

export const presets: Array<PresetConfig> = [
	[
		'classic',
		{
			sitemap: {
				changefreq: EnumChangefreq.WEEKLY,
				priority: 0.5,
				ignorePatterns: ['/tags/**'],
				filename: 'sitemap.xml',
			},
			blog: {
				blogTitle: 'Guides',
				blogSidebarCount: 'ALL',
				showReadingTime: true,
				path: 'guides',
                routeBasePath: 'guides',
			},
			docs: {
				sidebarPath: require.resolve('./sidebars.config'),
			},
			theme: {
				customCss: require.resolve('../src/css/starton.css'),
			},
			...(process.env.GTM_KEY && {
				googleTagManager: {
					containerId: process.env.GTM_KEY,
				},
			}),
		} satisfies Preset.Options,
	],
] satisfies Array<PresetConfig>
