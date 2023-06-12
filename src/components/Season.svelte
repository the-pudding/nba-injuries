<script>
	import { range } from "d3";
	import { getContext } from "svelte";
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

	const copy = getContext("copy");

	let prevY;

	function onOpen(e) {
		prevY = window.scrollY;
	}

	function onClose(e) {
		e.target.closest("details").removeAttribute("open");
		window.scrollTo(0, prevY);
	}

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

<details class="season" data-asterisks={asterisksCount} on:toggle={onOpen}>
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
		<!-- <Legend /> -->
		<div class="rounds">
			<h3><strong>Opponent Breakdown</strong></h3>
			<Players players={asteriskedOpponents} />
			{#if valueLimp === "On"}
				<h3>
					<strong>{winnerNameMascot} Breakdown</strong>
				</h3>
				{#if asteriskedWinners.length}
					<Players winner={true} players={asteriskedWinners} />
				{:else}
					<p>No injured or inactive players</p>
				{/if}
			{/if}
			<h3><strong>Game by Game Detail</strong></h3>
			<div>
				{#each rounds as { round, opponent, games }}
					<Round {round} {opponent} {games} {winnerAbbr} />
				{/each}
			</div>
		</div>
		<div class="dnp">
			<h3>
				<strong>
					Percent of Playoffs Injured/Inactive <span>(All Teams)</span>
				</strong>
			</h3>
			<p>
				{copy.dnpExplanation}
			</p>
			<Dnp {dnp} {winnerAbbr} {opponents} />
		</div>
		<p class="close"><button on:click={onClose}>Collapse Season</button></p>
	</div>
</details>

<style>
	h3 {
		line-height: 1.2;
		font-size: var(--20px);
		margin-top: 32px;
		border-top: 1px solid var(--color-bluefaded);
		padding-top: 8px;
	}

	span {
		display: block;
	}

	.inner {
		padding: 16px 0;
	}

	.rounds div {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto auto;
		column-gap: 16px;
		row-gap: 16px;
		justify-items: start;
		max-width: 480px;
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

	.dnp p {
		max-width: 45rem;
	}

	p.close {
		text-align: center;
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
			max-width: 100%;
		}

		.inner {
			padding: 16px 32px;
		}
	}

	@media only screen and (min-width: 960px) {
		summary {
			padding: 0 32px;
			font-size: min(3vw, 48px);
		}

		h3 {
			margin-top: 48px;
		}

		.rounds div {
			display: flex;
			margin: 16px auto 32px auto;
			flex-wrap: wrap;
			align-items: flex-start;
		}
	}
</style>
