export default function Home({ generatedAt }) {
	return (
		<div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
			<h1>Root Page (/)</h1>
			<p>
				<strong>Last Generated At:</strong> {generatedAt}
			</p>
			<p>
				Refresh this page to see if the timestamp changes after calling the
				revalidate API.
			</p>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			generatedAt: new Date().toISOString(),
		},
	};
}
