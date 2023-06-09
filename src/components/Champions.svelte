<script>
	import { onMount } from "svelte";
	import { flip } from "svelte/animate";
	import { cubicInOut } from "svelte/easing";
	import { max, sum, mean, range, scaleLinear } from "d3";
	import Season from "$components/Season.svelte";
	import Options from "$components/Options.svelte";
	import Legend from "$components/Legend.svelte";
	import getSeasonData from "$data/getSeasonData.js";

	let rank = "league";
	let visibles = [];
	let valueLimp = "On";
	let valueSort = "Asterisks";
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

	function getAsterisks(asterisks) {
		// if (valueLimp === "Off") return scales.opponent(asterisks.opponent);
		// return scales.plusminus(asterisks.plusMinus);
		if (valueLimp === "Off") return asterisks.opponent;
		return asterisks.plusMinus;
	}

	$: if (seasons.length) sortSeasons(valueSort, valueLimp);
</script>

<Options bind:valueSort bind:valueLimp />

<section id="champions">
	<Legend />
	{#each seasons as season, i (season.season)}
		<!-- {@const visible = visibles[i]} -->
		{@const asterisksCount = getAsterisks(season.asterisks, valueLimp)}
		<Season {...season} {asterisksCount} {valueLimp} />
	{/each}
</section>

<style>
	section {
		max-width: 1400px;
		margin: 32px auto;
		font-family: var(--mono);
		min-height: 600px;
	}

	@media only screen and (min-width: 960px) {
		section {
			width: 95%;
		}
	}

	@media only screen and (min-width: 1200px) {
		section {
			width: 75%;
		}
	}
</style>
