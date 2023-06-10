/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/components/**/*.{html,js,svelte,ts}',
    './src/**/*.{html,js,svelte,ts}'
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    base: false,
    logs: false
  }
}
