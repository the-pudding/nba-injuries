<script>
	import { onMount, getContext } from "svelte";
	import { json, max } from "d3";
	import Game from "$components/Champions.game.svelte";

	let maxRoster;
	let rank = "league";

	const roundNames = [
		"First",
		"Conference Semifinals",
		"Conference Finals",
		"Finals"
	];

	let seasons = [];
	onMount(async () => {
		seasons = await json("assets/champions.json");

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
	{#each seasons as { season, winner, rounds }}
		<div class="season">
			<p class="title">{winner}<br />{season}</p>
			{#each rounds as { round, opponent, games }}
				<div class="rounds">
					<!-- <p>{roundNames[round - 1]}: {winner} vs {opponent}</p> -->
					<p class="opponent">{opponent}</p>
					<div class="games">
						{#each games as { game, playersOpponent, playersWinner }}
							<Game
								{game}
								{playersOpponent}
								{playersWinner}
								{maxRoster}
								{rank}
							/>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</section>

<style>
	#champions {
		padding: 16px;
	}

	.season {
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
</style>
