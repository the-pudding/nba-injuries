<script>
	import { tooltip } from "@svelte-plugins/tooltips";
	import getDnp from "$utils/getDnp.js";
	import players from "$data/player-lookup.csv";
	export let opponents;
	export let result;

	const maxGames = 26;
	const maxGamesMobile = 14;
	const margin = 16;

	function getPlayer(id) {
		const player = players.find((p) => p.bbrID === id);
		return player || {};
	}

	function getColor(dnp, asterisks) {
		if (!dnp) return "var(--color-bluefaded)";
		else if (asterisks === 2) return "var(--color-primary)";
		else if (asterisks === 1) return "var(--color-secondary)";
		return "var(--color-tertiary)";
	}

	// $: mobile = $roundsWidth < 640 - margin * 2;
	// $: max = mobile ? maxGamesMobile : maxGames;
	// $: rounds = mobile ? 2 : 3;
	// // $: width = Math.max(30, Math.min(40, ($roundsWidth - margin * rounds) / max));
</script>

<div class="game">
	<p class="result">{result}</p>
	<ul class="opponent">
		{#each opponents as { bbrID, asterisks, reason }}
			{@const dnp = getDnp({ reason, asterisks })}
			{@const backgroundColor = getColor(dnp, asterisks)}
			{@const color = dnp ? "var(--color-bluedark)" : "var(--color-fg)"}
			{@const player = getPlayer(bbrID)}
			<li
				class:dnp
				data-dnp={dnp}
				data-asterisks={dnp ? asterisks || 0 : ""}
				data-reason={reason || ""}
				data-id={bbrID}
				use:tooltip={{
					theme: "custom-tooltip",
					content: player.name,
					align: "center",
					arrow: false,
					autoPosition: true,
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
		margin-bottom: 16px;
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
		width: 5vw;
		max-width: 32px;
		height: 8px;
		background: var(--color-bluefaded);
		border-right: 1px solid var(--color-bg);
		border-bottom: 1px solid var(--color-bg);
		transition: transform 0.1s ease-out;
		pointer-events: none;
	}

	li:hover {
		transform-origin: 50% 50%;
		transform: scale(1.25);
		z-index: var(--z-top);
		border-top: 1px solid var(--color-bg);
		border-left: 1px solid var(--color-bg);
		border-color: var(--color-fg);
	}

	.dnp[data-asterisks="2"] {
		background: var(--color-primary);
	}

	.dnp[data-asterisks="1"] {
		background: var(--color-secondary);
	}

	.dnp[data-asterisks="0"] {
		background: var(--color-tertiary);
	}

	.result {
		font-size: var(--12px);
		margin: 0;
	}

	@media only screen and (min-width: 960px) {
		li {
			pointer-events: auto;
		}
	}
</style>
