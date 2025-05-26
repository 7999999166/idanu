<script>
  let { children } = $props();
</script>
<svelte:head>
  <title>About Us Page</title>
  <meta name="description" content="About Us Page">
</svelte:head>
<div>
   {@render children()}
</div>

<style>
   
</style>