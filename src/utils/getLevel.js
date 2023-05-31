export default function getLevel(rank) {
	if (rank < 50) return 0;
	else if (rank < 150) return 1;
	return 2;
}
