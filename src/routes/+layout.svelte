<script>
	import '../app.css';
        let { children } = $props();
    </script>
    <svelte:head>
       <script src="/bootstrap.bundle.min.js"></script> 
       <script src="/axios.min.js"></script>
       <link rel="stylesheet" href="/sal.css">
       <script src="/sal.js"></script>
       <link rel="stylesheet" href="/bootstrap.min.css"> 
       <link rel="stylesheet" href="/w3.css">  
       <link rel="stylesheet" href="/bootstrap-icons.min.css">
     </svelte:head>
     <div class="app">
          <div>
               <a href="/">Home</a>
               <a href="/aboutUs">About Us</a>
               <a href="/contactUs">Contact Us</a>
               <a href="/products">Products</a>
               <a href="/productDetail">Product Detail</a>
          </div>
	
	<main>
		{@render children()}
	</main>

     </div>

     <style>
	
     </style>
