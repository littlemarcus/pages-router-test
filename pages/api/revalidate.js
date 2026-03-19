export default async function handler(req, res) {
	if (req.query.secret !== "test-secret") {
		return res.status(401).json({ message: "Invalid token" });
	}

	const pathToRevalidate = req.query.path || "/";

	try {
		await res.revalidate(pathToRevalidate);

		return res.json({
			revalidated: true,
			path: pathToRevalidate,
			message: `Successfully revalidated ${pathToRevalidate}`,
		});
	} catch (err) {
		console.error("Revalidation error:", err);
		return res.status(500).json({
			revalidated: false,
			message: "Error revalidating",
			error: err.message,
		});
	}
}
