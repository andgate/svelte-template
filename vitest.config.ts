import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          hot: !process.env.VITEST,
          typescript: true,
          postcss: true
        })
      ]
    })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setup-test.ts'],
    exclude: [
      ...configDefaults.exclude,
      'app/my-app/*',
      'packages/eslint-config-custom/*'
    ],
    // https://github.com/vitest-dev/vitest/issues/1674
    ...(process.env.CI && {
      minThreads: 4,
      maxThreads: 4
    })
  }
})
