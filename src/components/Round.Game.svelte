<script>
	import getLevel from "$utils/getLevel.js";
	import getDnp from "$utils/getDnp.js";
	export let opponents;
	export let result;
</script>

<div class="game">
	<p class="number">{result}</p>
	<ul class="opponent">
		{#each opponents as { bbrID, name, rank_team, rank_league, reason }}
			{@const level = getLevel(rank_league)}
			{@const dnp = getDnp({ reason, level })}
			<li
				class:dnp
				data-level={dnp ? level : ""}
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
		width: 32px;
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
