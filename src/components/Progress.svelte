<script>
	export let progress;
	export let fg = "#ccc";
	export let radius = 0.5;
	export let width = 0.05;

	$: r = radius - width / 2;
	$: w = radius * 2;
	$: h = w;
	$: dashArray = Math.PI * 2 * r;
	$: dashOffset = dashArray * ((1 - progress) / 1);
</script>

<svg viewBox="0 0 {w} {h}">
	<circle
		cx={radius}
		cy={radius}
		{r}
		stroke={fg}
		stroke-width={width}
		stroke-dashoffset={dashOffset}
		stroke-dasharray={dashArray}
	/>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);
	}

	circle {
		fill: none;
	}
</style>
