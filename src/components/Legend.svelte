<div>
	<p>Asterisk Calculation:</p>
	<ul>
		<li><strong>Top 30 = **</strong></li>
		<li><strong>Top 150 = *</strong></li>
		<li><strong>150+ = none</strong></li>
	</ul>
</div>

<style>
	div {
		position: sticky;
		top: 0;
		left: 0;
		display: flex;
		margin-top: 16px;
		z-index: var(--z-overlay);
		background: var(--color-bg);
		padding: 24px 0 8px 16px;
		border-bottom: 1px solid var(--color-bluefaded);
		justify-content: center;
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
		padding: 4px 8px;
		color: var(--color-bluedark);
		text-align: center;
		position: relative;
	}

	p {
		margin-right: 4px;
		padding: 4px 0;
		color: var(--color-fg);
		display: none;
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

	@media only screen and (min-width: 480px) {
		li {
			font-size: var(--14px);
		}
	}

	@media only screen and (min-width: 640px) {
		p {
			display: block;
		}
		div {
			justify-content: flex-start;
		}
	}
</style>
