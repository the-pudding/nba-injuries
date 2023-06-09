<script>
	import { getContext } from "svelte";
	import ButtonSet from "$components/helpers/ButtonSet.svelte";
	export let valueSort;
	export let valueLimp;
	const copy = getContext("copy");
</script>

<div class="options">
	<div class="buttons">
		<div class="buttonset">
			<ButtonSet
				legend="Sort by"
				options={[{ value: "Asterisks" }, { value: "Year" }]}
				bind:value={valueSort}
			/>
		</div>
		<div class="buttonset">
			<ButtonSet
				legend="Enable LIMP"
				options={[{ value: "On" }, { value: "Off" }]}
				bind:value={valueLimp}
			/>
		</div>
	</div>
	<div class="explanation">
		<p class="limp">{@html copy.limpAbridged}</p>
	</div>
</div>

<style>
	.options {
		font-family: var(--mono);
		margin: 0 auto;
		margin-bottom: 64px;
		max-width: 280px;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
	}

	.buttonset {
		font-size: var(--20px);
	}

	.buttonset:first-of-type {
		margin-right: 8px;
	}

	.buttonset:last-of-type {
		margin-left: 8px;
	}

	.explanation {
		margin: 16px auto;
	}

	p {
		font-size: var(--12px);
		margin: 0;
	}

	@media only screen and (min-width: 340px) {
		p {
			font-size: var(--12px);
		}

		.options {
			max-width: 280px;
		}
	}
</style>
