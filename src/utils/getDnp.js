export default function getDnp({ reason, asterisks }) {
	if (reason === "Did Not Play" && !asterisks) return true;
	else if (reason && reason !== "Did Not Play") return true;
	return false;
}
