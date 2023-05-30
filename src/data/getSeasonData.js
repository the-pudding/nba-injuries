import { ascending, descending, json } from "d3";
import teams from "$data/teams.json";
import getLevel from "$utils/getLevel.js";

export default async function getSeasonData() {
	const raw = await json("assets/champions.json");
	const seasons = raw
		.filter((d) => d.season !== 2023 && d.season >= 2000)
		.map((d) => ({
			...d,
			winnerAbbr: d.winner,
			winnerName: teams[d.winner]
		}));

	seasons.forEach((season) =>
		season.dnp.sort((a, b) => {
			const levelA = getLevel({ dnp: true, rank: a.rank_league });
			const levelB = getLevel({ dnp: true, rank: b.rank_league });
			return ascending(levelA, levelB) || descending(a.rate, b.rate);
		})
	);
	return seasons;
}
