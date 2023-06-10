import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

// TODO: setup environment variables for Alpha, Beta, Staging, and Production.
const production = false

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    sourceMap: !production,
    postcss: true
  }),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
}

export default config
