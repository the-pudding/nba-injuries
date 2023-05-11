<script>
	export let opponents;
	export let result;
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
	<p class="number">{result}</p>
	<ul class="opponent">
		{#each opponents as { bbrID, name, rank_team, rank_league, reason }}
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
	<!-- <hr />
	<ul class="winner">
		{#each winners as { bbrID, name, rank_team, rank_league, reason }}
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
	</ul> -->
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
		background: rgba(255, 255, 255, 0.25);
		margin-right: 1px;
		margin-bottom: 1px;
		/* border: 1px solid #fff; */
	}

	.dnp {
		/* border: 1px solid #000; */
	}

	.dnp[data-level="0"] {
		background: var(--color-primary);
	}

	.dnp[data-level="1"] {
		background: var(--color-secondary);
	}

	.dnp[data-level="2"] {
		background: var(--color-tertiary);
	}

	span {
		display: none;
	}

	.number {
		font-size: 12px;
		margin: 0;
	}

	/* hr {
		height: 2px;
		width: 100%;
		background: black;
	} */
</style>
