<script>
  import { counter } from "$lib/data.svelte.js";
function increment(){
    counter.info = counter.info + 1;
  }
function decrement(){
    counter.info = counter.info - 1;
  }
</script>
<svelte:head>
  <title>Products Page</title>
  <meta name="description" content="Products Page">
</svelte:head>
<div>
   Hey i am products page
   <button class="btn btn-primary" onclick={increment}>Increment</button>
   <button class="btn btn-primary" onclick={decrement}>Decrement</button>
   <p>{counter.info}</p>
</div>

<style>
   
</style>