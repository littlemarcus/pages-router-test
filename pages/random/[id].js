export default function Random() {
	return (
		<div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
			<h1>Random Page</h1>
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export async function getStaticProps() {
	return {
		redirect: {
			destination: `/product/${Math.random().toString(36).substring(2, 8)}`,
			permanent: true,
		},
	};
}
