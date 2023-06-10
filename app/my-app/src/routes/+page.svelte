<script lang="ts">
  import { CounterButton } from 'ui'
</script>

<svelte:head>
  <title>My App</title>
</svelte:head>

<main class="h-full w-full m-0 p-0 overflow-hidden block relative">
  <CounterButton />
</main>

<style global lang="postcss">
  @import 'ui/styles.css';
</style>
