export default function getDnp({ reason, asterisks }) {
	if (reason && asterisks) return true;
	if (reason && reason !== "Did Not Play" && !asterisks) return true;
	return false;
}
