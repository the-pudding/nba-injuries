<script>
	export let game;
	export let playersOpponent;
	export let playersWinner;
	export let maxRoster;
	export let rank;

	function getLevel(dnp, rank_team, rank_league, rank) {
		if (!dnp) return;
		if (rank === "team") {
			if (rank_team < 2) return 0;
			else if (rank_team < 5) return 1;
		} else if (rank === "league") {
			if (rank_league < 50) return 0;
			else if (rank_league < 150) return 1;
		}

		return 2;
	}
</script>

<div class="game">
	<p class="number">{game}</p>
	<ul class="opponent">
		{#each playersOpponent as { bbrID, name, rank_team, rank_league, reason }}
			{@const dnp = reason && reason !== "Did Not Play"}
			{@const level = getLevel(dnp, rank_team, rank_league, rank)}
			<li
				class:dnp
				data-level={level}
				data-reason={reason}
				data-id={bbrID}
				data-name={name}
				title="{name}: {rank_league}"
			>
				<span>{name}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
		width: 24px;
		height: 8px;
		background: #eee;
		margin-right: 1px;
		margin-bottom: 1px;
		border: 1px solid #ccc;
	}

	.dnp {
		/* border: 1px solid #000; */
	}

	.dnp[data-level="0"] {
		background: deeppink;
	}

	.dnp[data-level="1"] {
		background: lightsalmon;
	}

	.dnp[data-level="2"] {
		background: #ccc;
	}

	span {
		display: none;
	}

	.number {
		font-size: 12px;
		margin: 0;
	}
</style>
