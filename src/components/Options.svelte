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
		margin-bottom: 64px;
	}

	.buttons {
		display: flex;
		justify-content: center;
	}

	.buttonset {
		font-size: var(--20px);
		margin: 0 8px;
	}

	.explanation {
		max-width: 20.5rem;
		margin: 16px auto;
	}

	p {
		font-size: var(--14px);
		margin: 0;
	}
</style>
