<script>
	import { onMount } from "svelte";
	import { flip } from "svelte/animate";
	import { cubicInOut } from "svelte/easing";
	import { max, sum, mean, range, scaleLinear } from "d3";
	import Summary from "$components/Season.Summary.svelte";
	import Round from "$components/Season.Round.svelte";
	import Options from "$components/Options.svelte";
	// import SortTable from "$components/helpers/SortTable.svelte";

	import getSeasonData from "$data/getSeasonData.js";

	let rank = "league";
	let visibles = [];
	let valueLimp = "Off";
	let valueSort = "Year";
	let seasons = [];

	const maxAsterisks = 3;

	// const columns = [
	// 	{ label: "name", prop: "name" },
	// 	{ label: "team", prop: "team" },
	// 	{
	// 		label: "games missed",
	// 		prop: "rate",
	// 		formatFn: (d) => `${Math.round(d * 100)}%`
	// 	},
	// 	{ label: "league rank", prop: "rank_league" }
	// ];

	// const caption = "Top players who missed games in the playoffs";

	const scales = {
		opponent: scaleLinear().range([0, maxAsterisks]),
		plusminus: scaleLinear().range([0, maxAsterisks])
	};

	onMount(async () => {
		seasons = await getSeasonData();
		visibles = range(seasons.length).map(() => false);
		scales.opponent.domain([0, max(seasons.map((d) => d.asterisks.opponent))]);
		scales.plusminus.domain([
			0,
			max(seasons.map((d) => d.asterisks.plusMinus))
		]);
	});

	function sortSeasons() {
		seasons.sort((a, b) => {
			if (valueSort === "Year") return b.season - a.season;
			else if (valueLimp === "Off")
				return b.asterisks.opponent - a.asterisks.opponent;
			else return b.asterisks.plusMinus - a.asterisks.plusMinus;
		});
		seasons = [...seasons];
	}

	function calcAsterisks(asterisks) {
		if (valueLimp === "Off") return scales.opponent(asterisks.opponent);
		return scales.plusminus(asterisks.plusMinus);
	}

	$: if (seasons.length) sortSeasons(valueSort, valueLimp);
</script>

<Options bind:valueSort bind:valueLimp />

<section id="champions">
	{#each seasons as { season, winnerAbbr, winnerName, rounds, asterisks, dnp, percentInjured }, i (season)}
		{@const visible = visibles[i]}
		{@const scaledAsterisks = calcAsterisks(asterisks, valueLimp)}
		<!-- animate:flip={{ delay: i * 75, duration: 0, easing: cubicInOut }} -->
		<details class="season" open={false}>
			<summary>
				<Summary {season} {winnerAbbr} {winnerName} {scaledAsterisks} />
			</summary>
			<div class="inner">
				<div class="rounds">
					{#each rounds as { round, opponent, games }}
						<Round {round} {opponent} {games} {winnerAbbr} />
					{/each}
				</div>
			</div>
			<!-- <div class="details" class:visible>
				<div class="chart"></div>
			</div> -->
		</details>
	{/each}
</section>

<style>
	section {
		/* font-family: var(--mono); */
		width: 75vw;
		max-width: 1400px;
		margin: 0 auto;
	}

	.rounds {
		display: flex;
	}

	.rank {
		margin: 0;
	}

	.active {
		background: black;
		color: white;
	}

	.details {
		display: none;
	}

	.details.visible {
		display: block;
	}

	.dnp ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.dnp li {
		list-style-type: none;
		padding: 8px;
		width: 128px;
	}

	.dnp p {
		font-size: var(--12px);
		font-family: var(--font-body);
		text-align: center;
		margin: 0;
		padding: 4px;
		line-height: 1.2;
		border-top: 2px solid white;
	}

	.dnp img {
		filter: grayscale(100%);
	}

	summary {
		font-size: min(4vw, 80px);
		cursor: pointer;
	}
</style>
