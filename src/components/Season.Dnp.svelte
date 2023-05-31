<script>
	import Progress from "$components/Progress.svelte";
	import getLevel from "$utils/getLevel.js";
	export let dnp;
	export let winnerAbbr;
	export let opponents;

	const labels = ["Opponents", "Champions", "Rest of League"];

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
	$: all = [dnpOpponents, dnpWinners, dnpOthers];
</script>

<div class="c">
	{#each all as players, i}
		{@const label = players.length ? `${labels[i]}` : ""}
		{#if label}
			<h4 class="label">{label}</h4>
		{/if}
		<ul>
			{#each players as { name, bbrID, headshot, team, rate, rank_league }, j}
				{@const winner = team === winnerAbbr}
				{@const src = getSrc(headshot, bbrID)}
				{@const level = getLevel(rank_league)}
				{@const fallback = !headshot}
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
							<img {src} class:fallback alt="headshot of {name}" />
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
		</ul>
	{/each}
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
	}

	li {
		position: relative;
		list-style-type: none;
		padding: 8px;
		padding-bottom: 0;
		margin: 8px;
		margin-bottom: 8px;
		margin-right: 16px;
		margin-left: 0;
		border-top: 1px solid var(--color-bluelight);
		background: linear-gradient(180deg, var(--color-bluedark), transparent 50%);
	}

	.label {
		line-height: 1;
		font-size: var(--16px);
		color: var(--color-bluelight);
		margin-bottom: 8px;
	}

	.circle {
		width: 128px;
		aspect-ratio: 1 / 1;
		position: relative;
		padding: 10%;
	}

	.img-bg {
		display: block;
		border: 1px solid var(--color-bluelight);
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
		transform: translate(0, 6px);
		transition: all 0.5s ease-in-out;
		padding: 4px;
	}

	.img-bg img.fallback {
		opacity: 0.5;
	}
	/* 
	.logo {
		width: 36px;
		padding: 0px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 50%;
		opacity: 0.75;
	} */

	.team {
		position: absolute;
		top: 6px;
		left: 6px;
		font-size: var(--12px);
	}

	.percent {
		position: absolute;
		top: 6px;
		right: 6px;
		font-size: var(--12px);
	}
</style>
