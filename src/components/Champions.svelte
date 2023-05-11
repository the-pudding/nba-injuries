<script>
	import { onMount, getContext } from "svelte";
	import { json, max, sum, mean, scaleLinear, range } from "d3";
	import Game from "$components/Champions.game.svelte";
	import teams from "$data/teams.json";
	import Toggle from "$components/helpers/Toggle.svelte";
	import ButtonSet from "$components/helpers/ButtonSet.svelte";

	let rank = "league";
	let visibles = [];
	let limpValue;

	const maxAsterisks = 3;

	const roundNames = [
		"First",
		"Conference Semifinals",
		"Conference Finals",
		"Finals"
	];

	let seasons = [];
	const scales = {
		opponent: scaleLinear().range([0, maxAsterisks]),
		all: scaleLinear().range([0, maxAsterisks]),
		allNotOpponent: scaleLinear().range([0, maxAsterisks])
	};

	onMount(async () => {
		const seasonsRaw = await json("assets/champions.json");
		seasons = seasonsRaw.filter((d) => d.season !== 2023 && d.season >= 2000);
		visibles = range(seasons.length).map(() => false);
		seasons.sort((a, b) => b.season - a.season);
		scales.all.domain([0, max(seasons.map((d) => d.asterisks.all))]);
		scales.allNotOpponent.domain([
			0,
			max(seasons.map((d) => d.asterisks.allNotOpponent))
		]);
		scales.opponent.domain([0, max(seasons.map((d) => d.asterisks.opponent))]);
		console.log(seasons);
		// maxRoster = max(
		// 	seasons
		// 		.map((d) => d.rounds)
		// 		.flat()
		// 		.map((d) => d.games)
		// 		.flat()
		// 		.map((d) => Math.max(d.playersOpponent.length, d.playersWinner.length))
		// );
	});
</script>

<div class="ui">
	<Toggle label="Enable LIMP" style="inner" bind:value={limpValue} />
	<ButtonSet
		legend="Sort by"
		options={[{ value: "Year" }, { value: "Asterisks" }]}
	/>
	<!-- <p class="rank">Rank by</p>
	<button class:active={rank === "league"} on:click={() => (rank = "league")}
		>League</button
	>

	<button class:active={rank === "team"} on:click={() => (rank = "team")}
		>Team</button
	> -->
</div>

<section id="champions">
	{#each seasons as { season, winner, rounds, asterisks }, i}
		{@const visible = visibles[i]}
		{@const arrow = visible ? "▼" : "▶"}
		{@const scaledAsterisks = scales.opponent(asterisks.opponent)}
		{@const pm = asterisks.opponent - asterisks.allNotOpponent}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="season" on:click={() => (visibles[i] = !visible)}>
			<h3 class="name">
				<button>{@html arrow}</button>
				{season}
				<span
					>{teams[winner]}{@html range(Math.round(scaledAsterisks))
						.map((d) => "<sup>*</sup>")
						.join("")}
				</span>
			</h3>
			<div class="details" class:visible>
				<p class="title">
					<span>opponents: {asterisks.opponent.toFixed(1)}</span>
					<span>+/-: {pm.toFixed(1)}</span>
					<span>------------</span>
					<span>all: {asterisks.all.toFixed(1)}</span>
					<span>others: {asterisks.allNotOpponent.toFixed(1)}</span>
				</p>
				{#each rounds as { round, opponent, games }}
					<div class="rounds">
						<!-- <p>{roundNames[round - 1]}: {winner} vs {opponent}</p> -->
						<p class="opponent">{opponent}</p>
						<div class="games">
							{#each games as game}
								{@const opponents = game.playersOpponent}
								{@const winners = game.playersWinner}
								{@const result = game.winner === winner ? "W" : "L"}
								<Game {game} {opponents} {winners} {result} {rank} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		font-family: var(--mono);
		width: 75vw;
		max-width: 1400px;
		margin: 0 auto;
	}

	.details {
		display: flex;
		margin-bottom: 16px;
	}

	.season {
		cursor: pointer;
		user-select: none;
	}

	.games {
		display: flex;
		align-items: flex-start;
	}

	.rounds {
		display: flex;
		flex-direction: column;
		margin: 0 2px;
	}

	.opponent {
		margin: 0;
		text-align: center;
		line-height: 1;
	}

	.rank {
		margin: 0;
	}

	.active {
		background: black;
		color: white;
	}

	.title {
		margin: 0;
		text-align: right;
		line-height: 1;
		padding: 0 8px;
	}

	.title span {
		display: block;
		margin-bottom: 8px;
	}

	.name {
		font-size: min(4vw, 80px);
		position: relative;
		display: inline-block;
	}

	.name:after {
		content: "👈";
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(125%, 0);
		opacity: 0;
		transition: opacity 0.25s ease-in-out;
	}

	.name:hover:after {
		opacity: 1;
	}

	.name button {
		background: transparent;
		color: var(--color-fg);
		padding: 0;
		opacity: 0.5;
		width: 1em;
	}
	.details {
		display: none;
	}

	.details.visible {
		display: flex;
	}
</style>
