<script>
	import Game from "$components/Round.Game.svelte";
	import teams from "$data/teams-name.json";

	export let round;
	export let opponent;
	export let games;
	export let winnerAbbr;

	const roundNames = ["First Round", "Conf. Semi", "Conf. Finals", "Finals"];
</script>

<div class="c">
	<p class="name">{roundNames[round - 1]}</p>
	<p class="opponent"><strong>{teams[opponent]}</strong></p>
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
		align-items: center;
		justify-self: start;
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
		margin-top: 4px;
	}

	.name {
		margin: 0;
		margin-bottom: 4px;
		text-align: center;
		line-height: 1;
		color: var(--color-bluelight);
		font-size: var(--12px);
	}

	@media only screen and (min-width: 960px) {
		.c {
			margin-right: 16px;
		}
	}
</style>
