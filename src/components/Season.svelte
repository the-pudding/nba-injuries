<script>
	import Summary from "$components/Season.Summary.svelte";
	import Round from "$components/Season.Round.svelte";
	import Dnp from "$components/Season.Dnp.svelte";
	// import SortTable from "$components/helpers/SortTable.svelte";

	export let season;
	export let winnerAbbr;
	export let winnerName;
	export let rounds;
	export let dnp;
	export let scaledAsterisks;
	export let winner;
	export let asterisks;
	export let percentInjured;
</script>

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
		<div class="dnp">
			<Dnp {dnp} {winnerAbbr} />
		</div>
	</div>
</details>

<style>
	.rounds {
		display: flex;
	}

	summary {
		font-size: min(4vw, 80px);
		cursor: pointer;
	}
</style>
