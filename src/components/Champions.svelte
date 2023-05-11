<script>
	import { onMount, getContext } from "svelte";
	import { json, max, sum, mean, scaleLinear, range } from "d3";
	import Game from "$components/Champions.game.svelte";
	import teams from "$data/teams.json";
	import ButtonSet from "$components/helpers/ButtonSet.svelte";
	import SortTable from "$components/helpers/SortTable.svelte";

	let rank = "league";
	let visibles = [];
	let valueLimp = "Off";
	let valueSort = "Year";
	let seasons = [];

	const maxAsterisks = 3;

	const roundNames = [
		"First",
		"Conference Semifinals",
		"Conference Finals",
		"Finals"
	];

	const columns = [
		{ label: "name", prop: "name" },
		{ label: "team", prop: "team" },
		{
			label: "games missed",
			prop: "rate",
			formatFn: (d) => `${Math.round(d * 100)}%`
		},
		{ label: "league rank", prop: "rank_league" }
	];

	const caption = "Top players who missed games in the playoffs";

	const scales = {
		opponent: scaleLinear().range([0, maxAsterisks]),
		pm: scaleLinear().range([0, maxAsterisks])
	};

	onMount(async () => {
		const seasonsRaw = await json("assets/champions.json");
		seasons = seasonsRaw.filter((d) => d.season !== 2023 && d.season >= 2000);
		visibles = range(seasons.length).map(() => false);
		// scales.all.domain([0, max(seasons.map((d) => d.asterisks.all))]);
		// scales.allNotOpponent.domain([
		// 	0,
		// 	max(seasons.map((d) => d.asterisks.allNotOpponent))
		// ]);
		scales.opponent.domain([0, max(seasons.map((d) => d.asterisks.opponent))]);
		scales.pm.domain([
			0,
			max(seasons.map((d) => d.asterisks.opponent - d.asterisks.winner))
		]);
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

	function sortSeasons() {
		seasons.sort((a, b) => {
			if (valueSort === "Year") return b.season - a.season;
			else if (valueLimp === "Off")
				return b.asterisks.opponent - a.asterisks.opponent;
			else
				return (
					b.asterisks.opponent -
					b.asterisks.winner -
					(a.asterisks.opponent - a.asterisks.winner)
				);
		});
		seasons = [...seasons];
	}

	function calcAsterisks(asterisks) {
		if (valueLimp === "Off") return scales.opponent(asterisks.opponent);
		return scales.pm(asterisks.opponent - asterisks.winner);
	}

	$: if (seasons.length) sortSeasons(valueSort, valueLimp);
</script>

<!-- TODO component -->
<div class="ui">
	<div>
		<ButtonSet
			legend="Sort by"
			options={[{ value: "Year" }, { value: "Asterisks" }]}
			bind:value={valueSort}
		/>
	</div>
	<div>
		<ButtonSet
			legend="Enable LIMP"
			options={[{ value: "On" }, { value: "Off" }]}
			bind:value={valueLimp}
		/>
	</div>
</div>

<section id="champions">
	{#each seasons as { season, winner, rounds, asterisks, dnp, percentInjured }, i}
		{@const visible = visibles[i]}
		{@const arrow = visible ? "▼" : "▶"}
		{@const scaledAsterisks = calcAsterisks(asterisks, valueLimp)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="season">
			<h3 class="name">
				<button on:click={() => (visibles[i] = !visible)}>
					<span class="arrow">{@html arrow}</span>
					{season}
					<span
						>{teams[winner]}{@html range(Math.round(scaledAsterisks))
							.map((d) => "<sup>*</sup>")
							.join("")}
					</span>
				</button>
			</h3>
			<div class="details" class:visible>
				<div class="chart">
					<p class="title">
						<span>opponents: {asterisks.opponent.toFixed(1)}</span>
						<span>winner: {asterisks.winner.toFixed(1)}</span>
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
				<div class="dnp">
					<SortTable rows={dnp} {columns} {caption} />
				</div>
				<p class="injured">
					playoff injury rate: {Math.round(percentInjured * 100)}%
				</p>
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

	.chart {
		display: flex;
		margin-bottom: 16px;
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
		font-family: var(--mono);
		background: transparent;
		color: var(--color-fg);
		user-select: none;
	}

	.button .arrow {
		padding: 0;
		opacity: 0.5;
		width: 1em;
	}

	.details {
		display: none;
	}

	.details.visible {
		display: block;
	}

	.ui {
		display: flex;
		justify-content: center;
	}

	.ui > div {
		font-size: var(--20px);
		margin: 0 8px;
	}
</style>
