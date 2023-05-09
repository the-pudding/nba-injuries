<script>
	import { getContext } from "svelte";
	import WIP from "$components/helpers/WIP.svelte";
	import Champions from "$components/Champions.svelte";
	// import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>

<div class="temp">
	<h3>Todos</h3>
	<p>
		Tone: a little tongue-in-cheek. introduce a new metric that computes
		asterisks.
	</p>
	<ul>
		<li>
			league vs team? - leaning league because it better reflects stacked/weak
			teams instead of treating depth uniformly
		</li>
		<li>injury +/- (like this as a toggle)</li>
		<li>matrix: see the teams they beat teams they beat (too many)</li>
		<li>factor in all injuries to teams they didn't play?</li>
		<li>
			custom acroynm - CRUTCH (Championship Rating Utilizing Top Competitor
			Health), LIMP (League Injury Modified Performance), OUCH (Over Under
			Comparative Health)
		</li>
	</ul>
	<h3>Asterisk scoring system</h3>
	<ul>
		<li>[visual] size vs number of asterisks?</li>
		<li>
			each game gets a score or whole round? - leaning round since that would
			normalize across years.
		</li>
		<li>
			kicker: add a sprinkle/multiplier for injuries in teams they didn't face
		</li>

		<li>include bottom tier players?</li>
		<li>scale to 3 max? do half or quarter asterisks?</li>
	</ul>
</div>
<WIP />
<Champions />

<!-- <Footer /> -->

<style>
	.temp {
		margin-bottom: 32px;
	}
</style>
