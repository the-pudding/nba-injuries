<script>
	import { range } from "d3";
	import Summary from "$components/Season.Summary.svelte";
	import Round from "$components/Season.Round.svelte";
	import Dnp from "$components/Season.Dnp.svelte";
	import Legend from "$components/Legend.svelte";

	export let season;
	export let winnerAbbr;
	export let winnerName;
	export let rounds;
	export let dnp;
	export let asterisksCount;
	// export let winner;
	// export let asterisks;
	// export let percentInjured;

	$: opponents = rounds.map(({ opponent }) => opponent);
	$: asterisks = range(Math.ceil(asterisksCount))
		.map(() => "*")
		.join("");
</script>

<!-- animate:flip={{ delay: i * 75, duration: 0, easing: cubicInOut }} -->
<details class="season" open={false}>
	<summary data-asterisks={asterisksCount}>
		<Summary {season} {winnerName} {asterisks} />
	</summary>
	<div class="inner">
		<Legend />
		<div class="rounds">
			<h3>Missing Opponents by Round</h3>
			<div>
				{#each rounds as { round, opponent, games }}
					<Round {round} {opponent} {games} {winnerAbbr} />
				{/each}
			</div>
		</div>
		<div class="dnp">
			<h3>Percent of Playoffs Missed by Player</h3>
			<Dnp {dnp} {winnerAbbr} {opponents} />
		</div>
	</div>
</details>

<style>
	.inner {
		padding: 16px 32px;
	}

	.rounds div {
		display: flex;
		margin: 16px auto 32px auto;
	}

	details {
		margin-top: 16px;
		user-select: none;
	}

	summary {
		font-size: min(3.5vw, 64px);
		cursor: pointer;
	}

	[data-asterisks="0"] {
		color: var(--color-fg);
	}

	[data-asterisks="1"] {
		color: var(--color-tertiary);
	}

	[data-asterisks="2"] {
		color: var(--color-secondary);
	}

	[data-asterisks="3"] {
		color: var(--color-primary);
	}
</style>
