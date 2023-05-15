<script>
	import Game from "$components/Round.Game.svelte";
	import teams from "$data/teams.json";

	export let round;
	export let opponent;
	export let games;
	export let winnerAbbr;

	const roundNames = ["First Round", "Conf. Semi", "Conf. Finals", "Finals"];
</script>

<div class="c">
	<p class="name">{roundNames[round - 1]}</p>
	<p class="opponent">{teams[opponent]}</p>
	<div class="games">
		{#each games as game}
			{@const opponents = game.playersOpponent}
			{@const winners = game.playersWinner}
			{@const result = game.winner === winnerAbbr ? "W" : "L"}
			<Game {opponents} {result} />
		{/each}
	</div>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		margin-right: 16px;
		align-items: center;
	}

	.opponent {
		margin: 0;
		text-align: center;
		line-height: 1;
		font-size: var(--14px);
	}

	.games {
		display: flex;
		align-items: flex-start;
	}

	.name {
		margin: 0;
		margin-bottom: 8px;
		text-align: center;
		line-height: 1;
	}
</style>
