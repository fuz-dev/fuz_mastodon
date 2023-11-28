// generated by src/lib/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_mastodon',
	description: 'Mastodon components and helpers for Svelte, SvelteKit, and Fuz',
	version: '0.2.4',
	public: true,
	icon: '🦣',
	license: 'MIT',
	homepage: 'https://mastodon.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_mastodon',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	type: 'module',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {
		'@fuz.dev/fuz_library': '*',
		'@fuz.dev/svelte_intersect': '*',
		'@grogarden/util': '*',
		'@sveltejs/kit': '*',
		svelte: '*',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.81.0',
		'@fuz.dev/fuz_code': '^0.4.3',
		'@fuz.dev/fuz_contextmenu': '^0.6.0',
		'@fuz.dev/fuz_dialog': '^0.5.0',
		'@fuz.dev/fuz_library': '^0.22.1',
		'@fuz.dev/svelte_intersect': '^0.7.0',
		'@grogarden/gro': '^0.102.3',
		'@grogarden/util': '^0.17.0',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.6',
		'@sveltejs/package': '^2.2.3',
		'@typescript-eslint/eslint-plugin': '^6.13.1',
		'@typescript-eslint/parser': '^6.13.1',
		'date-fns': '^2.30.0',
		eslint: '^8.54.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.1.0',
		'prettier-plugin-svelte': '^3.1.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.7',
		'svelte-check': '^3.6.2',
		tslib: '^2.6.2',
		typescript: '^5.3.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Mastodon_Status_Item.svelte': {
			svelte: './dist/Mastodon_Status_Item.svelte',
			default: './dist/Mastodon_Status_Item.svelte',
			types: './dist/Mastodon_Status_Item.svelte.d.ts',
		},
		'./Mastodon_Status_Tree.svelte': {
			svelte: './dist/Mastodon_Status_Tree.svelte',
			default: './dist/Mastodon_Status_Tree.svelte',
			types: './dist/Mastodon_Status_Tree.svelte.d.ts',
		},
		'./mastodon.js': {default: './dist/mastodon.js', types: './dist/mastodon.d.ts'},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
		'./storage.js': {default: './dist/storage.js', types: './dist/storage.d.ts'},
		'./Toot_Input.svelte': {
			svelte: './dist/Toot_Input.svelte',
			default: './dist/Toot_Input.svelte',
			types: './dist/Toot_Input.svelte.d.ts',
		},
		'./Toot_Loader.svelte': {
			svelte: './dist/Toot_Loader.svelte',
			default: './dist/Toot_Loader.svelte',
			types: './dist/Toot_Loader.svelte.d.ts',
		},
		'./Toot.svelte': {
			svelte: './dist/Toot.svelte',
			default: './dist/Toot.svelte',
			types: './dist/Toot.svelte.d.ts',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@fuz.dev/fuz_mastodon',
	version: '0.2.4',
	modules: {
		'./Mastodon_Status_Item.svelte': {path: 'Mastodon_Status_Item.svelte', declarations: []},
		'./Mastodon_Status_Tree.svelte': {path: 'Mastodon_Status_Tree.svelte', declarations: []},
		'./mastodon.js': {
			path: 'mastodon.ts',
			declarations: [
				{name: 'Mastodon_Cache', kind: 'type'},
				{name: 'Response_Data', kind: 'type'},
				{name: 'Mastodon_Response_Data', kind: 'type'},
				{name: 'fetch_data', kind: 'function'},
				{name: 'to_status_url', kind: 'function'},
				{name: 'to_status_url_with_author', kind: 'function'},
				{name: 'to_status_url_with_users_author', kind: 'function'},
				{name: 'to_api_status_url', kind: 'function'},
				{name: 'to_api_status_context_url', kind: 'function'},
				{name: 'to_api_favourites_url', kind: 'function'},
				{name: 'Mastodon_Status_Url', kind: 'type'},
				{name: 'parse_status_url', kind: 'function'},
				{name: 'fetch_status_context', kind: 'function'},
				{name: 'fetch_status', kind: 'function'},
				{name: 'fetch_favourites', kind: 'function'},
				{name: 'Mastodon_Context', kind: 'type'},
				{name: 'Mastodon_Status', kind: 'type'},
				{name: 'Mastodon_Favourite', kind: 'type'},
			],
		},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [
				{name: 'package_json', kind: 'variable'},
				{name: 'src_json', kind: 'variable'},
			],
		},
		'./storage.js': {
			path: 'storage.ts',
			declarations: [
				{name: 'load_from_storage', kind: 'function'},
				{name: 'set_in_storage', kind: 'function'},
			],
		},
		'./Toot_Input.svelte': {path: 'Toot_Input.svelte', declarations: []},
		'./Toot_Loader.svelte': {path: 'Toot_Loader.svelte', declarations: []},
		'./Toot.svelte': {path: 'Toot.svelte', declarations: []},
	},
} satisfies Src_Json;

// generated by src/lib/package.gen.ts
