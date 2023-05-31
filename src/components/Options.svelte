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
	<p class="explanation">{@html copy.limpAbridged}</p>
</div>

<style>
	.options {
		font-family: var(--mono);
	}

	.buttons {
		display: flex;
		justify-content: center;
	}

	.buttonset {
		font-size: var(--20px);
		margin: 0 8px;
	}

	p {
		font-size: var(--14px);
		max-width: 300px;
		margin: 16px auto;
	}
</style>
