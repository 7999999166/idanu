<script>
  import { counter } from "$lib/data.svelte.js";
  import {onMount} from "svelte";
  
$effect(()=>{
  if(window.location.href === 'https://main--spa-ssg.netlify.app/'){
    myVal = 'carousel';
  }
  else{
    myVal = 'true';
  }
  console.log(myVal);
});
  
  let myVal = $state('true');
 

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
   <div id="carouselExampleAutoplaying" class="carousel slide d-flex flex-column align-items-center justify-content-center" data-bs-ride={myVal} style:width="100vw" style:height="50vh">
    <div class="carousel-inner w-100 h-100" >
      <div class="carousel-item active w-100 h-100" data-bs-interval="1000">
        <img src="https://picsum.photos/id/544/800/800" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item w-100 h-100" data-bs-interval="1000">
        <img src="https://picsum.photos/id/545/800/800" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item w-100 h-100" data-bs-interval="1000">
        <img src="https://picsum.photos/id/546/800/800" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<style>
   
</style>
