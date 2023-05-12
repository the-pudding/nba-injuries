<script>
	import { range } from "d3";
	export let season;
	export let winnerAbbr;
	export let winnerName;
	export let scaledAsterisks;
	// @html range(Math.round(scaledAsterisks)
	$: asterisks = range(scaledAsterisks)
		.map(() => "<sup>*</sup>")
		.join("");
</script>

<span class="year">{season}</span>
<span class="name">{winnerName}{@html asterisks}</span>

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

	.name:hover:after {
		opacity: 1;
	}
</style>
