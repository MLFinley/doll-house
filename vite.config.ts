import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import {marked } from 'marked';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'markdown',
			transform(src, id) {
			  if (id.endsWith('.md')) {
				const result = marked(src);
				return `export default ${JSON.stringify(result)}`;
			  }
			},
		}]
});
