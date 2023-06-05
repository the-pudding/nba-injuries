<script>
	export let season;
	export let name;
	export let nameMobile;
	export let abbr;
	export let asterisks;
</script>

<div>
	<span class="year">{season}</span>
	<span>
		<img src="assets/logos/{abbr.toLowerCase()}.svg" alt="logo for {abbr}" />
	</span>
	<span class="name desktop">
		{name}<sup>{@html asterisks}</sup>
	</span>
	<span class="name mobile">
		{nameMobile}<sup>{@html asterisks}</sup>
	</span>
</div>

<style>
	div {
		display: inline-flex;
		align-items: center;
		padding: 24px 0;
	}

	span {
		position: relative;
		display: inline-block;
		line-height: 1;
		margin: 0 4px;
	}

	sup {
		/* top: 0; */
		font-size: 100%;
	}

	img {
		width: 1.5em;
		vertical-align: middle;
		/* display: none; */
	}

	.name.desktop {
		display: none;
	}

	.name.mobile {
		display: inline-block;
	}

	@media only screen and (min-width: 960px) {
		.name.desktop {
			display: inline-block;
		}

		.name.mobile {
			display: none;
		}
	}

	@media only screen and (min-width: 480px) {
		span {
			margin: 0 8px;
		}
	}
</style>
