<script>
	import { getContext } from "svelte";
	const copy = getContext("copy");
</script>

<div id="method">
	<div class="byline">
		<p>
			By <a href="https://pudding.cool/author/russell-samora">Russell Samora</a>
		</p>
		<time>June 2023</time>
	</div>
	<h4><strong>Data and Methods</strong></h4>
	{#each copy.method as { value }}
		<p>{@html value}</p>
	{/each}
</div>

<style>
	#method {
		max-width: 45rem;
		margin: 64px auto 64px;
		background: var(--color-bluedark);
		padding: 16px 32px;
	}

	p {
		font-size: var(--14px);
	}

	.byline {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid currentColor;
		padding: 0 0 4px 0;
	}
	.byline p,
	.byline time {
		margin: 0;
		line-height: 1;
		font-size: var(--16px);
	}

	a {
		text-decoration: none;
		border: none;
		color: var(--color-primary);
	}
</style>
