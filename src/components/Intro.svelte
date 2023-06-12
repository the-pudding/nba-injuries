<script>
	import crutchLogo from "$svg/crutch.svg";
	import { getContext } from "svelte";
	const copy = getContext("copy");
</script>

<section id="intro">
	<div class="logo">
		{@html crutchLogo}
	</div>

	<h1>
		<strong>{copy.hed}</strong>
	</h1>
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
		margin: 0px auto 64px;
	}

	ul {
		padding-left: 24px;
	}

	h1 {
		font-size: var(--24px);
		text-align: center;
	}

	.logo {
		display: block;
		width: 84px;
		margin: 0 auto;
	}

	:global(.logo svg) {
		display: block;
	}

	h1 strong {
		flex: 1;
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

		.logo {
			width: 128px;
		}
	}
</style>
