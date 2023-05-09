<script>
	import { onMount, getContext } from "svelte";
	import { json, max, sum, mean, scaleLinear, range } from "d3";
	import Game from "$components/Champions.game.svelte";
	import teams from "$data/teams.json";

	let maxRoster;
	let rank = "league";

	const roundNames = [
		"First",
		"Conference Semifinals",
		"Conference Finals",
		"Finals"
	];

	let seasons = [];
	const s = scaleLinear().range([0, 3]);

	function getPlayerScore(player) {
		if (!player.reason || player.reason === "Did Not Play") return 0;
		if (player.rank_league < 30) return 2;
		else if (player.rank_league < 150) return 1;
		return 0;
	}

	function addAsterisk(years) {
		return years.map((season) => {
			const roundScores = season.rounds.map((round) => {
				const gameScores = round.games.map((game) => {
					const { playersOpponent, playersWinner } = game;
					return sum(playersOpponent.map(getPlayerScore));
				});
				const roundScore = mean(gameScores);
				return roundScore;
			});
			const asterisks = mean(roundScores);
			return {
				...season,
				asterisks
			};
		});
	}

	onMount(async () => {
		const seasonsRaw = await json("assets/champions.json");
		seasons = addAsterisk(seasonsRaw).filter((d) => d.season !== 2023);
		seasons.sort((a, b) => b.season - a.season);
		s.domain([0, max(seasons.map((d) => d.asterisks))]);
		console.log(seasons);
		maxRoster = max(
			seasons
				.map((d) => d.rounds)
				.flat()
				.map((d) => d.games)
				.flat()
				.map((d) => Math.max(d.playersOpponent.length, d.playersWinner.length))
		);
	});
</script>

<div class="ui">
	<p class="rank">Rank by</p>
	<button class:active={rank === "league"} on:click={() => (rank = "league")}
		>League</button
	>

	<button class:active={rank === "team"} on:click={() => (rank = "team")}
		>Team</button
	>
</div>

<section id="champions">
	{#each seasons as { season, winner, average, rounds, asterisks }}
		{@const scaledAsterisks = s(asterisks)}
		<div class="season">
			<h3 class="name">
				{season}
				{teams[winner]}{@html range(Math.round(scaledAsterisks))
					.map((d) => "<sup>*</sup>")
					.join("")} <span>👈</span>
			</h3>
			<div class="details">
				<p class="title">
					<span />
					<span>year: {season}</span>
					<span>asterisks score: {asterisks.toFixed(1)}</span>
					<span>all teams avg: {average}</span>
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
								<Game
									{game}
									{opponents}
									{winners}
									{result}
									{maxRoster}
									{rank}
								/>
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
	}

	.details {
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

	.ui {
		position: fixed;
		top: 64px;
		right: 0;
		background: white;
		padding: 16px;
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
		font-size: clamp(32px, 5vw, 96px);
	}

	.name span {
		opacity: 0;
		transition: opacity 0.25s ease-in-out;
	}

	.name:hover span {
		opacity: 1;
	}
	.details {
		display: none;
	}
</style>
