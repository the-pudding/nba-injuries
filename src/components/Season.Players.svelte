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
	{#each players as { bbrID, team, asterisks, tally }}
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
				<span class="name">{player.name}</span>
				<span class="tally"
					>Asterisks: <strong>{prefix}{tally.toFixed(1)}</strong></span
				>
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
		line-height: 1.2;
		min-width: 100%;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.circle {
		width: 56px;
		aspect-ratio: 1 / 1;
		margin-right: 16px;
	}

	.img-bg {
		display: block;
		background: var(--color-bluedark);
		border-radius: 50%;
		overflow: hidden;
	}

	.tally {
		font-size: var(--14px);
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
			min-width: 280px;
		}
	}
</style>
