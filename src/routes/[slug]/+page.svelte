<script lang="ts">
	import { formatDate } from '$lib/utils.ts'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>
<div class="meta">
	<p>{data.meta.date}</p>
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="link">
		<a href="{data.meta.link}" target="_blank" rel="noopener noreferrer">Visit project ↝</a>
	</div>

</div>

	<div class="prose">
		<data.content />
	</div>
</article>
<div class="back"><a href="/">⇜ back to all projects</a></div>


<style>

.back {
	text-align: center;
	margin-top: 3em;
	position: sticky;
	bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-2);
  border-radius: var(--border-radius);
  margin: 1em 0 1em;
  padding: 1em;
  font-size: 0.8rem;
  z-index: 2;
}



.meta {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 1.5em;
	margin-bottom: 2em;
}

.tags{
		color: var(--fg-2);
		 /* margin: 1em 0 1em 0;  */
	}

.tags span {
		margin-right: 1em;
	}

img {
		margin-bottom: 3em;
		width: 100%;
		box-shadow: 0px 0px 20px 4px #b3b3b3;
	}

</style>


