<script>
	import { getContext } from "svelte";
	const copy = getContext("copy");
</script>

<div id="method">
	<h4><strong>Data and Methods</strong></h4>
	{#each copy.method as { value }}
		<p>{@html value}</p>
	{/each}
</div>

<style>
	#method {
		max-width: 45rem;
		margin: 64px auto 64px;
		background: var(--color-fg);
		color: var(--color-bg);
		padding: 16px 32px;
	}
</style>
