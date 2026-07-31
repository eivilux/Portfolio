<script lang="ts">
	import '../app.css';

	import Topbar from '$lib/components/layout/Topbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Container from '$lib/components/layout/Container.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Céline Campi',
		url: 'https://celinecampi.com',
		image: 'https://celinecampi.com/images/portrait.jpg',
		description:
			'Conférencière professionnelle spécialisée en adaptabilité managériale, leadership et dépassement de soi.',
		areaServed: ['France', 'Luxembourg'],
		founder: {
			'@type': 'Person',
			name: 'Céline Campi'
		},
		sameAs: ['https://www.linkedin.com/in/...'] // TODO: Mettre les sites
	};
</script>

<svelte:head>
	<title>Céline Campi | Conférencière professionnelle</title>

	<link rel="canonical" href="https://celinecampi.com" />

	<script type="application/ld+json">
		{@html JSON.stringify(structuredData)}
	</script>

	<meta
		name="description"
		content="Céline Campi accompagne dirigeants, managers et équipes autour de l'adaptabilité managériale et du dépassement de soi à travers des conférences inspirantes."
	/>
	<meta
		name="keywords"
		content="Céline Campi, conférencière, conférence, management, leadership, RH, ressources humaines, dépassement de soi, keynote"
	/>

	<meta name="author" content="Céline Campi" />
	<meta name="robots" content="index,follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Céline Campi | Conférencière professionnelle" />
	<meta
		property="og:description"
		content="Des conférences inspirantes autour du management, des ressources humaines et du dépassement de soi."
	/>
	<meta property="og:image" content="/images/og-image.jpg" />
	<!-- TODO: mettre une image -->
	<meta property="og:url" content="https://celinecampi.com" />
	<meta property="og:site_name" content="Céline Campi" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Céline Campi | Conférencière professionnelle" />
	<meta
		name="twitter:description"
		content="Des conférences inspirantes autour du management et du dépassement de soi."
	/>
	<meta name="twitter:image" content="/images/og-image.jpg" />
	<!-- TODO: mettre une image -->

	<link rel="icon" href="/favicon.ico" />
	<!-- TODO: mettre un favicon -->
</svelte:head>

<div class="flex min-h-screen flex-col bg-background">
	<Topbar />

	<main class="flex-1 pt-topbar">
		<Container />
	</main>

	<Footer />
</div>
