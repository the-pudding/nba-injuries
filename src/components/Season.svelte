<script>
	import { range } from "d3";
	import Summary from "$components/Season.Summary.svelte";
	import Players from "$components/Season.Players.svelte";
	import Round from "$components/Season.Round.svelte";
	import Dnp from "$components/Season.Dnp.svelte";
	import Legend from "$components/Legend.svelte";
	import getAsteriskCount from "$utils/getAsteriskCount.js";

	export let season;
	export let winnerAbbr;
	export let winnerName;
	export let winnerNameMascot;
	export let rounds;
	export let dnp;
	export let asterisksCount;
	export let valueLimp;

	$: opponents = [].concat(
		...rounds.map(({ games }) =>
			[].concat(
				...games.map(({ playersOpponent }) =>
					playersOpponent.filter((d) => d.reason).map((d) => d.bbrID)
				)
			)
		)
	);

	$: asteriskedOpponents = getAsteriskCount(rounds, false);

	$: asteriskedWinners = getAsteriskCount(rounds, winnerAbbr);

	$: asterisks = range(Math.ceil(asterisksCount))
		.map(() => "*")
		.join("");
</script>

<details class="season" data-asterisks={asterisksCount}>
	<summary>
		<Summary
			{season}
			name={winnerName}
			nameMobile={winnerNameMascot}
			{asterisks}
			abbr={winnerAbbr}
		/>
	</summary>
	<div class="inner">
		<Legend />
		<div class="rounds">
			<h3>Opponents Breakdown</h3>
			<Players players={asteriskedOpponents} />
			{#if valueLimp === "On"}
				<h3>{winnerNameMascot} Breakdown</h3>
				{#if asteriskedWinners.length}
					<Players winner={true} players={asteriskedWinners} />
				{:else}
					<p>No injured or inactive players</p>
				{/if}
			{/if}
			<h3>Game by Game Breakdown</h3>
			<div>
				{#each rounds as { round, opponent, games }}
					<Round {round} {opponent} {games} {winnerAbbr} />
				{/each}
			</div>
		</div>
		<div class="dnp">
			<h3>
				Inactive and Injured Players <span>(All Teams, All Playoffs)</span>
			</h3>
			<Dnp {dnp} {winnerAbbr} {opponents} />
		</div>
	</div>
</details>

<style>
	h3 {
		line-height: 1.2;
		font-size: var(--20px);
		margin-top: 32px;
		font-weight: bold;
	}

	span {
		display: block;
	}

	.inner {
		padding: 16px 0;
	}

	.rounds div {
		display: flex;
		margin: 16px auto 32px auto;
		/* flex-direction: column; */
		flex-wrap: wrap;
		align-items: flex-start;
	}

	details {
		margin-top: 16px;
		user-select: none;
	}

	summary {
		background: var(--color-bluedark);
		font-size: max(22px, 4vw);
		padding: 0 16px;
		cursor: pointer;
		position: relative;
	}

	summary:after {
		content: "👈";
		position: absolute;
		top: 50%;
		right: 32px;
		transform: translate(0, -50%);
		opacity: 0;
		transition: opacity 0.25s ease-in-out;
	}

	@media (hover: hover) and (pointer: fine) {
		summary:hover:after {
			opacity: 1;
		}
	}

	@media only screen and (min-width: 480px) {
		span {
			display: inline;
		}
	}

	@media only screen and (min-width: 640px) {
		.rounds div {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
		}

		h3 {
			font-size: var(--24px);
		}
	}

	@media only screen and (min-width: 960px) {
		.rounds div {
			flex-wrap: nowrap;
			flex-direction: row;
			justify-content: flex-start;
		}

		.inner {
			padding: 16px 32px;
		}
	}

	@media only screen and (min-width: 960px) {
		summary {
			padding: 0 32px;
			font-size: min(3vw, 56px);
		}
	}
</style>
