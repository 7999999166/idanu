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
  <title>Contact Us Page</title>
  <meta name="description" content="Contact Us Page">
</svelte:head>
<div>
   Hey i am contact us page
   <button class="btn btn-primary" onclick={increment}>Increment</button>
   <button class="btn btn-primary" onclick={decrement}>Decrement</button>
   <p>{counter.info}</p>
</div>

<style>
   
</style>