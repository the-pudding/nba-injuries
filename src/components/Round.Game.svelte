<script>
	import { tooltip } from "@svelte-plugins/tooltips";
	import getLevel from "$utils/getLevel.js";
	import getDnp from "$utils/getDnp.js";
	export let opponents;
	export let result;

	function getColor(dnp, level) {
		if (!dnp) return "var(--color-bluefaded)";
		else if (level === 0) return "var(--color-primary)";
		else if (level === 1) return "var(--color-secondary)";
		else if (level === 2) return "var(--color-tertiary)";
	}
</script>

<div class="game">
	<p class="result">{result}</p>
	<ul class="opponent">
		{#each opponents as { bbrID, name, rank_team, rank_league, reason }}
			{@const level = getLevel(rank_league)}
			{@const dnp = getDnp({ reason, level })}
			{@const backgroundColor = getColor(dnp, level)}
			{@const color = dnp ? "var(--color-bg)" : "var(--color-fg)"}
			<li
				class:dnp
				data-level={dnp ? level : ""}
				data-reason={reason}
				data-id={bbrID}
				data-name={name}
				use:tooltip={{
					theme: "custom-tooltip",
					content: name,
					align: "center",
					arrow: false,
					style: { backgroundColor, color }
				}}
			/>
		{/each}
	</ul>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: crosshair;
	}

	ul {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
		width: 32px;
		height: 8px;
		background: var(--color-bluefaded);
		/* margin-right: 1px;
		margin-bottom: 1px; */
		border-right: 1px solid var(--color-bg);
		border-bottom: 1px solid var(--color-bg);
		transition: transform 0.1s ease-out;
	}

	li:hover {
		transform-origin: 50% 50%;
		transform: scale(1.25);
		z-index: var(--z-top);
		border-top: 1px solid var(--color-bg);
		border-left: 1px solid var(--color-bg);
		border-color: var(--color-fg);
	}

	.dnp {
		/* border: 1px solid #000; */
	}

	.dnp[data-level="0"] {
		background: var(--color-primary);
	}

	.dnp[data-level="1"] {
		background: var(--color-secondary);
	}

	.dnp[data-level="2"] {
		background: var(--color-tertiary);
	}

	.result {
		font-size: var(--12px);
		margin: 0;
	}
</style>
