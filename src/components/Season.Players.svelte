<script>
	import playersLookup from "$data/player-lookup.csv";

	export let players;
	export let winner;

	$: prefix = winner ? "-" : "";
	function getPlayer(id) {
		const player = playersLookup.find((p) => p.bbrID === id);
		return player || {};
	}

	function getSrc(headshot, bbrID) {
		return headshot
			? `assets/headshots/${bbrID}.png`
			: "assets/headshot-default.png";
	}
</script>

<ul>
	{#each players as { bbrID, team, asterisks, tally, round }}
		{@const player = getPlayer(bbrID)}
		{@const src = getSrc(player.headshot, bbrID)}
		{@const fallback = !player.headshot}
		<li data-asterisks={asterisks}>
			<div class="circle">
				<span class="img-bg">
					<img {src} class:fallback alt="headshot of {player.name}" />
				</span>
			</div>
			<div class="info">
				<span class="name"><strong>{player.name}</strong></span>
				<span class="tally">Asterisks: {prefix}{tally.toFixed(1)}</span>
				<span class="round">{round}</span>
			</div>
		</li>
	{/each}
</ul>

<style>
	[data-asterisks="2"] {
		background: var(--color-primary);
	}

	[data-asterisks="1"] {
		background: var(--color-secondary);
	}

	ul {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
	}

	li {
		display: flex;
		align-items: center;
		margin: 1px;
		padding: 8px;
		color: var(--color-bluedark);
		line-height: 1.4;
		min-width: calc(50% - 2px);
		font-size: var(--14px);
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.circle {
		width: 56px;
		aspect-ratio: 1 / 1;
		margin-right: 16px;
		display: none;
	}

	.img-bg {
		display: block;
		background: var(--color-bluedark);
		border-radius: 50%;
		overflow: hidden;
	}

	.tally,
	.round {
		font-size: var(--14px);
		color: var(--color-bg);
	}

	img {
		filter: grayscale(100%);
		transform: translate(0, 4px);
	}

	img.fallback {
		opacity: 0.5;
	}

	@media only screen and (min-width: 640px) {
		li {
			min-width: 270px;
		}
		.circle {
			display: block;
		}
	}
</style>
