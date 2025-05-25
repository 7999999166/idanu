<script>
	import '../app.css';
        let { children } = $props();
    </script>
    <svelte:head>
       <script src="/bootstrap.bundle.min.js"></script> 
       <script src="/axios.min.js"></script>
       <link rel="stylesheet" href="/sal.css">
       <script src="/sal.js"></script>
     </svelte:head>
     <div class="app">
          <div>
               <a style:text-decoration="none" href="/">Home</a>
               <a style:text-decoration="none" href="/aboutUs">About Us</a>
               <a style:text-decoration="none" href="/contactUs">Contact Us</a>
               <a style:text-decoration="none" href="/products">Products</a>
               <a style:text-decoration="none" href="/productDetail">Product Detail</a>
          </div>
	
	<main>
		{@render children()}
	</main>

     </div>

     <style>
	
     </style>
