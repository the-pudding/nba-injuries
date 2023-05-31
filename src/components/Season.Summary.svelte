<script>
	export let season;
	export let winnerName;
	export let asterisks;
</script>

<span class="year">{season}</span>
<span class="name">{winnerName}<sup>{@html asterisks}</sup></span>

<style>
	span {
		position: relative;
		display: inline-block;
	}

	.name:after {
		content: "👈";
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(125%, 0);
		opacity: 0;
		transition: opacity 0.25s ease-in-out;
	}

	@media (hover: hover) and (pointer: fine) {
		.name:hover:after {
			opacity: 1;
		}
	}

	sup {
		/* top: 0; */
		font-size: 100%;
	}
</style>
