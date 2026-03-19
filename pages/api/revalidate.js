export default async function handler(req, res) {
	// 1. Validate the secret token to prevent unauthorized revalidation
	if (req.query.secret !== "test-secret") {
		return res.status(401).json({ message: "Invalid token" });
	}

	// 2. Determine which path to revalidate (defaults to root)
	const pathToRevalidate = req.query.path || "/";

	try {
		// 3. Trigger the revalidation
		await res.revalidate(pathToRevalidate);

		return res.json({
			revalidated: true,
			path: pathToRevalidate,
			message: `Successfully revalidated ${pathToRevalidate}`,
		});
	} catch (err) {
		// If there is an error, Next.js continues to show the last successfully generated page
		console.error("Revalidation error:", err);
		return res.status(500).json({
			revalidated: false,
			message: "Error revalidating",
			error: err.message,
		});
	}
}
