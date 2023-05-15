<div>
	<p class="title">
		<span>opponents: {asterisks.opponent.toFixed(1)}</span>
		<span>winner: {asterisks.winner.toFixed(1)}</span>
		<span>------------</span>
		<span>all: {asterisks.all.toFixed(1)}</span>
		<span>others: {asterisks.allNotOpponent.toFixed(1)}</span>
	</p>
</div>

<p class="injured">
	playoff injury rate: {Math.round(percentInjured * 100)}%
</p>

<style>
	.dnp ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.dnp li {
		list-style-type: none;
		padding: 8px;
		width: 128px;
	}

	.dnp p {
		font-size: var(--12px);
		font-family: var(--font-body);
		text-align: center;
		margin: 0;
		padding: 4px;
		line-height: 1.2;
		border-top: 2px solid white;
	}

	.dnp img {
		filter: grayscale(100%);
	}
</style>
