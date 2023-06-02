import { ascending, descending, json } from "d3";
import teams from "$data/teams.json";
import teamsName from "$data/teams-name.json";
import getLevel from "$utils/getLevel.js";

export default async function getSeasonData() {
	const raw = await json("assets/champions.json");
	const seasons = raw
		.filter((d) => d.season >= 2000)
		.map((d) => ({
			...d,
			winnerAbbr: d.winner,
			winnerName: teams[d.winner],
			winnerNameMascot: teamsName[d.winner]
		}));

	seasons.forEach((season) =>
		season.dnp.sort((a, b) => {
			const levelA = getLevel(a.rank_league);
			const levelB = getLevel(b.rank_league);
			return ascending(levelA, levelB) || descending(a.rate, b.rate);
		})
	);
	return seasons;
}
