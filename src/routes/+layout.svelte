<script lang="ts">
	import Footer from './footer.svelte'
	import * as config from '$lib/config.ts'
	let { children, data } = $props();

	
</script>
<div class="grid">
<nav class="col-3-10 nav">
	<span>[ Em  tsu:  de:m   o: ]</span>
	<a href="/">home</a>
	<!-- <a href="/about">about</a>
	<a href="/blog">blog</a> -->
</nav>

<main class="col-2-11">
	
	{@render children()}

</main>

<Footer />
</div>


<style>
	.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-2);
  border-radius: var(--border-radius);
  margin: 0 0 1em;
  padding: 1em;
  position: relative;
  font-size: 0.8rem;
  z-index: 2;
}

/* Der Span nimmt die linke Seite ein */
.nav span {
  margin-right: auto;
}

/* Die Links auf der rechten Seite gruppieren */
.nav a {
  margin-left: 1em;
  text-decoration: none;
}
</style>