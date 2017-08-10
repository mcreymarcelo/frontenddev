<?php require('header.php'); ?>
    <div class="main-wrapper">
    	<div class="container">

    		<h1>Plain Big Image</h1>

    		<img src="https://unsplash.it/1300/800">

        <h1>Picture</h1>

        <picture>
          <source srcset="https://unsplash.it/400/400" media="(max-width: 650px)">
          <source srcset="https://unsplash.it/600/400" media="(max-width: 768px)">
          <source srcset="https://unsplash.it/800/400" media="(max-width: 960px)">
          <img src="https://unsplash.it/1300/800">
        </picture>

    	</div>
    </div> 
<?php require('footer.php'); ?>