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
  <script src="/bootstrap.bundle.min.js"></script> 
  <link rel="stylesheet" href="/bootstrap.min.css"> 
  <link rel="stylesheet" href="/w3.css">  
  <link rel="stylesheet" href="/bootstrap-icons.min.css">
</svelte:head>
<div>
   svelte Home Page 
   <button class="btn btn-primary" onclick={increment}>Increment</button>
   <button class="btn btn-primary" onclick={decrement}>Decrement</button>
   <p>{counter.info}</p>
</div>

<style>
   
</style>
