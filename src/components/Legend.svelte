<div>
	<p>Player Rank:</p>
	<ul>
		<li><strong>Top 30</strong></li>
		<li><strong>Top 150</strong></li>
		<li><strong>150+</strong></li>
	</ul>
</div>

<style>
	div {
		display: flex;
		margin-top: 16px;
	}

	ul {
		display: flex;
		padding: 0;
	}

	p,
	li {
		list-style-type: none;
		line-height: 1;
		font-size: var(--14px);
		margin: 0;
	}

	li {
		margin-right: 1px;
		padding: 4px 0;
		color: var(--color-bluedark);
		width: 4.5rem;
		text-align: center;
		position: relative;
	}

	p {
		margin-right: 4px;
		padding: 4px 0;
		color: var(--color-fg);
	}

	li:nth-of-type(1) {
		background: var(--color-primary);
	}

	li:nth-of-type(2) {
		background: var(--color-secondary);
	}

	li:nth-of-type(3) {
		background: var(--color-tertiary);
	}

	li:before {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0, -125%);
		color: var(--color-bluelight);
		width: 100%;
		text-align: center;
		font-size: var(--12px);
	}

	li:nth-of-type(1):before {
		content: "Star";
	}

	li:nth-of-type(2):before {
		content: "Starter";
	}

	li:nth-of-type(3):before {
		content: "Bench";
	}
</style>
