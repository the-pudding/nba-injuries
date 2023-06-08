<script>
	import Progress from "$components/Progress.svelte";
	import players from "$data/player-lookup.csv";
	export let dnp;
	export let winnerAbbr;
	export let opponents;

	const labels = ["Top 30 Players", "Top 150 Players"];

	function getSrc(headshot, bbrID) {
		return headshot
			? `assets/headshots/${bbrID}.png`
			: "assets/headshot-default.png";
	}

	function getPlayer(id) {
		const player = players.find((p) => p.bbrID === id);
		return player || {};
	}

	$: dnp30 = dnp.filter(({ asterisks }) => asterisks === 2);
	$: dnp150 = dnp.filter(({ asterisks }) => asterisks === 1);

	$: all = [dnp30, dnp150];
</script>

<div class="c">
	{#each all as players, i}
		{@const label = players.length ? `${labels[i]}` : ""}
		{@const asterisks = i === 0 ? 2 : 1}
		{@const asterisksDisplay = i === 0 ? "**" : "*"}
		{#if label}
			<h4 class="label" data-asterisks={asterisks}>{label}</h4>
		{/if}
		<ul>
			{#each players as { bbrID, team, rate }, j}
				{@const winner = team === winnerAbbr}
				{@const player = getPlayer(bbrID)}
				{@const src = getSrc(player.headshot, bbrID)}
				{@const fallback = !player.headshot}
				{@const played = opponents.includes(bbrID) || team === winnerAbbr}
				{@const fg =
					asterisks === 2 ? "var(--color-primary)" : "var(--color-secondary)"}
				<li data-asterisks={asterisks}>
					<p class="team">{team}</p>
					<p class="percent" style:color={fg}>{Math.round(rate * 100)}%</p>

					<div class="circle">
						<span class="img-bg">
							<img {src} class:fallback alt="headshot of {player.name}" />
						</span>
						<span class="progress">
							<Progress progress={rate} {fg} width="0.1" />
						</span>
					</div>
					<p class="name">
						<strong
							>{player.name}<sup>{played ? asterisksDisplay : ""}</sup></strong
						>
					</p>
				</li>
			{/each}
		</ul>
	{/each}
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
	}

	li {
		position: relative;
		list-style-type: none;
		padding: 8px;
		padding-bottom: 0;
		margin: 8px;
		margin-bottom: 8px;
		margin-right: 16px;
		margin-left: 0;
		border-top: 1px solid var(--color-bluelight);
		background: linear-gradient(180deg, var(--color-bluedark), transparent 50%);
		width: calc(33.33% - 16px);
		--width: 100%;
	}

	.label {
		line-height: 1;
		font-size: var(--16px);
		/* color: var(--color-bluelight); */
		margin-bottom: 8px;
	}

	.circle {
		width: var(--width);
		aspect-ratio: 1 / 1;
		position: relative;
		padding: 10%;
	}

	.img-bg {
		display: block;
		border: 1px solid var(--color-bluelight);
		background: var(--color-bluedark);
		border-radius: 50%;
		overflow: hidden;
	}

	.progress {
		position: absolute;
		top: 5%;
		left: 5%;
		width: 90%;
		display: none;
	}

	p {
		margin: 0;
		line-height: 1.2;
	}

	.name {
		font-size: var(--12px);
		text-align: center;
		width: var(--width);
	}

	.img-bg img {
		filter: grayscale(100%);
		transform: translate(0, 6px);
		/* transition: all 0.5s ease-in-out; */
		padding: 4px;
	}

	.img-bg img.fallback {
		opacity: 0.5;
	}

	.team {
		position: absolute;
		top: 4px;
		left: 6px;
		font-size: var(--12px);
	}

	.percent {
		position: absolute;
		top: 4px;
		right: 6px;
		font-size: var(--12px);
	}

	.label[data-asterisks="2"] {
		color: var(--color-primary);
	}

	.label[data-asterisks="1"] {
		color: var(--color-secondary);
	}

	sup {
		margin-left: 2px;
	}

	@media only screen and (min-width: 640px) {
		li {
			--width: 128px;
			width: calc(var(--width) + 16px);
		}

		.progress {
			display: block;
		}

		.name {
			font-size: var(--14px);
		}

		.team,
		.percent {
			top: 6px;
		}
	}
</style>
