<script lang="ts">
    import { formatDate } from '$lib/utils.ts'
	import * as config from '$lib/config.ts'
	let { data } = $props();
		
</script>

<svelte:head>
	<title>Work in Progress</title>
</svelte:head>


<h1>MOIN!</h1>
<p class="intro">
	this is <strong>work in progress</strong> by me – Maurice. <br>
	I'm an UX Designer and Product Owner based in Hamburg.<br> 
	<a href="mailto:m@emzudemo.de">Say moin.</a>
</p>

<div id="container" class="center">
	<div id="hourglass">
		<div class="a"></div>
		<div class="b"></div>
		<div class="c"></div>
		<div class="d"></div>
		<div class="e"></div>
		<div class="f"></div>
		<div class="f"></div>
		<div class="e"></div>
		<div class="d"></div>
		<div class="c"></div>
		<div class="b"></div>
		<div class="a"></div>
	</div>
	<div id="sand">
		<div class="grain g1"></div>
		<div class="grain g2"></div>
		<div class="grain g3"></div>
		<div class="grain g4"></div>
		<div class="grain g5"></div>
		<div class="grain g6"></div>
		<div class="grain g7"></div>
		<div class="grain g8"></div>
		<div class="grain g9"></div>
		<div class="grain g10"></div>
		<div class="grain g11"></div>
		<div class="grain g12 hide"></div>
		<div class="grain g13"></div>
	</div>
</div>

<section>
	<ul class="posts">
		{#each data.posts as post}
		<a href={post.slug}><li class="post">
				<p class="description">{post.description}</p>
				<img class="teaserimage" src="{post.teaserimage}"><img>
			</li></a>
		{/each}
	</ul>
</section>


<style>



	.intro {
		margin-bottom: 4em;
	}

	a {
		text-decoration: none;
	}
	.description {
		font-size: 1.8em;	
		color: var(--fg-1);
		font-weight: 400;	
		
	}
	ul {
			list-style-type: none;
			display: grid;
			/* grid-template-columns: repeat(auto-fit, minmax(820px, 1fr)); */
			list-style-type: none;
			padding: 0;
			gap: 60px; /* Abstand zwischen den Elementen */


}

li {
	background: var(--bg-2);
  border-radius: var(--border-radius);
  padding: 1em;
  box-shadow: none;

}

ul  :hover{
	background-color: var(--link-hover);


}

li  :hover{
	box-shadow: none;

	
}
img{
box-shadow: none;
margin-bottom: 0;
}

 #container{
	position: sticky;
	top: 20px;
} 

/* .center {
   position: absolute;
   left: 50%;
   top: 20%; 
   margin-left: -52px;
   margin-top: -88px;
} */

#hourglass{
    width: 52px;
    margin: 0 auto;
}

#sand{
    margin: 0 auto;
    width: 28px;
	height: 60px;
	position: relative;
	top: -72px;
}

.grain {
    background-color: #000000;
    height: 4px;
    width: 4px;
	position: absolute;
}

.a, .b, .c, .d, .e, .f{
    background-color: #FFFFFF;
    height: 4px;
    margin: 0 auto;
}

.a, .b, .c, .d, .e, .f{
    border-right: 8px solid black;
    border-left: 8px solid black;
}

.a{
    width: 36px;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
}

.b{
    width: 37px;
    height: 16px;
    border-right: 4px solid black;
    border-left: 4px solid black;
}

.c{width: 28px;}
.d{width: 20px;}
.e{width: 12px;}
.f{width: 4px;}

.g1{top: 0px;left: 0px;}
.g2{top: 0px;left: 8px;}
.g3{top: 0px;left: 16px;}
.g4{top: 0px;left: 24px;}
.g5{top: 4px;left: 4px;}
.g6{top: 4px;left: 12px;}
.g7{top: 4px;left: 20px;}
.g8{top: 8px;left: 16px;}
.g9{top: 8px;left: 16px;}
.g10{top: 12px;left: 6px;}
.g11{top: 20px;left: 6px;}
.g12{top: 32px;left: 12px;}
.g13{top: 36px;left: 12px;}

.hide{
	display: none;
}

/* .moveg1{
	left: 16px;
	top: 112px;
}

.moveg2{
	left: 48px;
	top: 112px;
}

.moveg3{
	top: 112px;
}

.moveg4{
	left: 24px;
	top: 104px;
}

.moveg5{
	top: 112px;
	left: 0px;
}

.moveg6{
	left: 8px;
	top: 104px;
}

.moveg7{
	top: 104px;
}

.moveg8{
	top: 96px;
}

.moveg9{
	top: 96px;
}

.moveg10{
	top: 88px;
} */

</style>