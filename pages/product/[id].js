export default function Product({ id, generatedAt }) {
	return (
		<div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
			<h1>Product Page: {id}</h1>
			<p>
				<strong>Last Generated At:</strong> {generatedAt}
			</p>
			<p>
				Path to test: <code>/product/{id}</code>
			</p>
		</div>
	);
}

export async function getStaticProps({ params }) {
	return {
		props: {
			id: params.id,
			generatedAt: new Date().toISOString(),
		},
	};
}

export async function getStaticPaths() {
	return {
		// Pre-render product '1' at build time
		paths: [{ params: { id: "1" } }],
		// 'blocking' ensures new products are generated on their first request
		fallback: "blocking",
	};
}
