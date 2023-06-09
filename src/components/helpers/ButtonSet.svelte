<script>
	export let options = [];
	export let legend = "";
	export let legendPosition = "top";
	export let labelClass = "";
	export let disabled = false;
	export let value = options.length ? options[0].value : "";

	const id = `legend-${Math.floor(Math.random() * 1000000)}`;
	const makeSlug = (str = "") => `${str}`.toLowerCase().replace(/\W/g, "");

	$: optionsWithSlug = options.map((d) => ({
		...d,
		val: d.value,
		slug: makeSlug(d.value)
	}));
	$: isTop = legendPosition === "top";
</script>

<div class="button-set">
	<div
		id={`group-${id}`}
		class="group"
		class:is-top={isTop}
		role="radiogroup"
		aria-labelledby={`label-${id}`}
	>
		{#if legend}<div class="legend" id="legend-{id}">{legend}</div>{/if}
		<div class="options">
			{#each optionsWithSlug as option}
				<div class="option">
					<input
						type="radio"
						id={`${id}-${option.slug}`}
						name="name-{id}"
						class="sr-only"
						value={option.value}
						{disabled}
						bind:group={value}
					/>
					<label class="option {labelClass}" for={`${id}-${option.slug}`}>
						{option.label || option.value}
					</label>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.button-set {
		display: inline-block;
		margin-bottom: 4px;
	}

	.group {
		display: flex;
		align-items: center;
	}

	.group.is-top {
		flex-direction: column;
	}

	.legend {
		font-size: var(--14px);
		padding-bottom: 4px;
	}

	.options {
		display: flex;
	}

	label {
		appearance: none;
		user-select: none;
		line-height: 1;
		margin: 0;
		padding: 8px;
		border-radius: 0;
		border: none;
		outline: none;
		cursor: pointer;
		font-family: inherit;
		font-size: var(--16px);
		display: inline-block;
	}

	.option + .option label {
		/* border-left-width: 0; */
	}

	.option + .option > label {
		/* border-left-width: 0; */
	}

	input[type="radio"] + label {
		background: var(--color-bluedark);
		color: var(--color-bluelight);
		opacity: 0.8;
		border: 2px solid transparent;
	}

	input[type="radio"]:checked + label,
	input[type="radio"]:checked:hover + label {
		background: var(--color-white);
		color: var(--color-bg);
		opacity: 1;
	}

	input[type="radio"]:hover + label {
		opacity: 1;
	}

	input[type="radio"]:focus + label {
		border: 2px solid var(--color-secondary);
	}

	input[type="radio"]:disabled + label {
		color: var(--color-bg);
		background: var(--color-fg);
		cursor: not-allowed;
	}

	@media only screen and (min-width: 340px) {
		.legend {
			font-size: var(--14px);
		}

		label {
			font-size: var(--18px);
		}
	}
</style>
