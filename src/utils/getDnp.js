export default function getDnp({ reason, rank }) {
	if (reason === "Did Not Play" && rank < 2) return true;
	else if (reason && reason !== "Did Not Play") return true;
	return false;
}
