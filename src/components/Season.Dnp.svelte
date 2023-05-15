<script>
	export let dnp;
	export let winnerAbbr;

	function getSrc(headshot, bbrID) {
		return headshot
			? `assets/headshots/${bbrID}.png`
			: "assets/headshot-default.png";
	}
</script>

<div class="c">
	<!-- <SortTable rows={dnp} {columns} {caption} /> -->
	<ul>
		{#each dnp as { name, bbrID, headshot, team, rate, rank_league }}
			{@const winner = team === winnerAbbr}
			{@const src = getSrc(headshot, bbrID)}
			<li class:winner>
				<img {src} alt="headshot of {name}" />
				<p><strong>{name}</strong></p>
				<p>team: {team}</p>
				<p>missed: {Math.round(rate * 100)}%</p>
				<p>rank: {rank_league}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
	}

	li {
		width: 128px;
		list-style-type: none;
		padding: 8px;
	}

	.winner {
		background: rgba(255, 255, 255, 0.25);
	}

	p {
		margin: 0;
		font-size: var(--14px);
	}

	img {
		border-radius: 50%;
		border: 1px solid var(--color-tertiary);
		filter: grayscale(100%);
	}
</style>
