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

	<h1><strong>{copy.hed}</strong></h1>
	<p>{@html copy.intro}</p>

	<details>
		<summary>CRUTCH explained</summary>
		<div class="inner">
			{#each copy.details as { type, value }}
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
	</details>
</section>

<style>
	section {
		max-width: 45rem;
		margin: 16px auto 64px;
		/* background: var(--color-bluedark); */
		/* color: var(--color-bluedark); */
		/* padding: 16px; */
	}

	a {
		text-decoration: none;
		border: none;
		color: var(--color-primary);
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

	ul {
		padding-left: 24px;
	}

	h1 {
		font-size: var(--24px);
	}

	p,
	li {
		font-size: var(--14px);
	}

	details summary,
	details p {
		font-size: var(--12px);
	}

	details {
		background: var(--color-bluedark);
		padding: 16px;
	}

	summary {
		cursor: pointer;
	}

	.inner {
		padding: 0 16px;
	}

	@media only screen and (min-width: 500px) {
		h1 {
			font-size: var(--32px);
		}
		p,
		li {
			font-size: var(--16px);
		}

		details summary,
		details p {
			font-size: var(--14px);
		}
	}

	@media only screen and (min-width: 800px) {
		h1 {
			font-size: var(--48px);
		}

		p,
		li {
			font-size: var(--18px);
		}

		details summary,
		details p {
			font-size: var(--16px);
		}
	}
</style>
