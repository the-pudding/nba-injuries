import { groups, descending, sum } from "d3";
export default function getAsteriskCount(rounds, winner) {
	const allPlayers = [].concat(
		...rounds.map(({ games, opponent }) => {
			const count = games.length;
			const players = [].concat(
				...games.map(({ playersOpponent, playersWinner }) => {
					if (winner)
						return playersWinner.filter((d) => d.reason && d.asterisks);
					else return playersOpponent.filter((d) => d.reason && d.asterisks);
				})
			);
			const byPlayer = groups(players, (d) => d.bbrID).map(([bbrID, g]) => {
				const asterisks = g[0].asterisks;
				const tally = (asterisks * g.length) / count;
				const team = winner || opponent;
				return { bbrID, team, asterisks, tally };
			});

			return byPlayer;
		})
	);

	if (winner) {
		const unique = groups(allPlayers, (d) => d.bbrID).map(([bbrID, r]) => {
			const tally = sum(r, (v) => v.tally);
			return {
				...r[0],
				tally
			};
		});
		unique.sort((a, b) => descending(a.tally, b.tally));
		return unique;
	}

	allPlayers.sort((a, b) => descending(a.tally, b.tally));
	return allPlayers;
}
