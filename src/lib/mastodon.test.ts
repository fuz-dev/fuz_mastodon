import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {parse_mastodon_status_url} from '$lib/mastodon.js';

test('parse a mastodon status url', () => {
	assert.equal(
		parse_mastodon_status_url('https://mastodon.ryanatkn.com/@ryanatkn/110843291155970959'),
		{
			href: 'https://mastodon.ryanatkn.com/@ryanatkn/110843291155970959',
			host: 'mastodon.ryanatkn.com',
			status_id: '110843291155970959',
			author: 'ryanatkn',
		},
	);
});

test.run();
