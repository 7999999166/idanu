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
  <title>Svelte Home Page</title>
  <meta name="description" content="Svelte Home Page">
</svelte:head>
<div>
   svelte Home Page 
   <button class="btn btn-primary" onclick={increment}>Increment</button>
   <button class="btn btn-primary" onclick={decrement}>Decrement</button>
   <p>{counter.info}</p>
</div>

<style>
   
</style>
