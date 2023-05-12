import { json } from "d3";
import teams from "$data/teams.json";

export default async function getSeasonData() {
	const raw = await json("assets/champions.json");
	const seasons = raw
		.filter((d) => d.season !== 2023 && d.season >= 2000)
		.map((d) => ({
			...d,
			winnerAbbr: d.winner,
			winnerName: teams[d.winner]
		}));

	return seasons;
}
