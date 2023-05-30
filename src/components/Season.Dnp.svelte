<script>
	import Progress from "$components/Progress.svelte";
	import getLevel from "$utils/getLevel.js";
	export let dnp;
	export let winnerAbbr;
	export let opponents;

	const labels = ["Winner", "Opponents", "Rest of League"];

	function getSrc(headshot, bbrID) {
		return headshot
			? `assets/headshots/${bbrID}.png`
			: "assets/headshot-default.png";
	}

	$: dnpWinners = dnp.filter(({ team }) => team === winnerAbbr);
	$: dnpOpponents = dnp.filter(({ team }) => opponents.includes(team));
	$: dnpOthers = dnp.filter(
		({ team }) => !opponents.includes(team) && team !== winnerAbbr
	);
	$: all = [dnpWinners, dnpOpponents, dnpOthers];
</script>

<div class="c">
	<h3>Missed Playoff Games by Player</h3>
	<ul>
		{#each all as players, i}
			{#if players.length}
				<li class="divider">
					<span class="label"><strong>{labels[i]} &rarr;</strong></span>
				</li>
			{/if}

			{#each players as { name, bbrID, headshot, team, rate, rank_league }}
				{@const winner = team === winnerAbbr}
				{@const src = getSrc(headshot, bbrID)}
				{@const level = getLevel({ dnp: true, rank: rank_league })}
				{@const fg =
					level === 0 ? "var(--color-primary)" : "var(--color-secondary)"}
				<li data-level={level}>
					<!-- <img
					class="logo"
					src="assets/logos/{team.toLowerCase()}.svg"
					alt="{team} logo"
				/> -->
					<p class="team">{team}</p>
					<p class="percent" style:color={fg}>{Math.round(rate * 100)}%</p>

					<div class="circle">
						<span class="img-bg">
							<img {src} alt="headshot of {name}" />
						</span>
						<span class="progress">
							<Progress progress={rate} {fg} width="0.1" />
						</span>
					</div>
					<p class="name"><strong>{name}</strong></p>
					<!-- <p>team: {team}</p>
				<p>missed: {Math.round(rate * 100)}%</p>
				<p>rank: {rank_league}</p> -->
				</li>
			{/each}
		{/each}
	</ul>
</div>

<style>
	h3 {
		/* text-align: center; */
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		/* justify-content: center; */
	}

	li {
		position: relative;
		list-style-type: none;
		padding: 8px;
		padding-bottom: 0;
		margin: 8px;
		margin-bottom: 16px;
		margin-right: 16px;
		margin-left: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		background: linear-gradient(180deg, var(--color-bluedark), transparent 50%);
	}

	li.divider {
		padding: 0;
		margin: 0;
		background: transparent;
		border: none;
		width: 0;
		/* text-align: left; */
		/* border-left: 2px solid rgba(255, 255, 255, 0.5); */
		/* width: 16px; */
		/* transform: translate(0, -8px); */
		/* display: flex; */
	}

	.label {
		display: inline-block;
		/* justify-content: center; */
		transform-origin: 0 0;
		/* transform: rotate(-90deg) translate(-100%, -100%); */
		transform: translate(0, -120%);
		line-height: 1;
		white-space: nowrap;
		font-size: var(--14px);
		color: rgba(255, 255, 255, 0.5);
	}

	.circle {
		width: 128px;
		aspect-ratio: 1 / 1;
		position: relative;
		padding: 10%;
	}

	.img-bg {
		display: block;
		border: 1px solid rgba(255, 255, 255, 0.75);
		background: var(--color-bluedark);
		border-radius: 50%;
		overflow: hidden;
	}

	.progress {
		display: block;
		position: absolute;
		top: 5%;
		left: 5%;
		width: 90%;
	}

	p {
		margin: 0;
		line-height: 1.2;
	}

	.name {
		font-size: var(--14px);
		text-align: center;
		width: 128px;
	}

	.img-bg img {
		filter: grayscale(100%);
		transform: translate(0, 7.5%);
	}
	.logo {
		width: 32px;
		padding: 4px;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 50%;
		opacity: 1;
	}

	.team {
		position: absolute;
		top: 4px;
		left: 4px;
		font-size: var(--12px);
	}

	.percent {
		position: absolute;
		top: 4px;
		right: 4px;
		font-size: var(--12px);
	}
</style>
