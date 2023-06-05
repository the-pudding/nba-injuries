<script>
	import { getContext } from "svelte";
	const copy = getContext("copy");
</script>

<section id="intro">
	<div class="byline">
		<p>
			By <a href="https://pudding.cool/author/russell-samora">Russell Samora</a>
		</p>
		<time>June 2023</time>
	</div>
	<div class="inner">
		<h1>{copy.hed}</h1>
		{#each copy.intro as { type, value }}
			{#if type === "ul"}
				<ul>
					{#each value as li}
						<li>{@html li}</li>
					{/each}
				</ul>
			{:else}
				<p>{@html value}</p>
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		max-width: 45rem;
		margin: 16px auto 64px;
		background: var(--color-fg);
		color: var(--color-bg);
		padding: 16px 32px;
	}

	a {
		text-decoration: none;
		border: none;
		font-weight: bold;
	}

	.byline {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid currentColor;
		padding: 16px 0 4px 0;
	}
	.byline p,
	.byline time {
		margin: 0;
		line-height: 1;
		font-size: var(--16px);
	}

	ul {
		padding-left: 24px;
	}

	h1 {
		font-size: var(--24px);
		font-weight: bold;
	}

	p,
	li {
		font-size: var(--14px);
	}

	@media only screen and (min-width: 500px) {
		h1 {
			font-size: var(--28px);
		}
		p,
		li {
			font-size: var(--18px);
		}
	}

	@media only screen and (min-width: 800px) {
		h1 {
			font-size: var(--32px);
		}

		p,
		li {
			font-size: var(--20px);
		}
	}
</style>
