<script lang="ts">
	import '../app.css';

	import Topbar from '$lib/components/layout/Topbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Container from '$lib/components/layout/Container.svelte';
</script>

<div class="flex min-h-screen flex-col bg-background">
	<Topbar />

	<main class="flex-1 pt-topbar">
		<Container />
	</main>

	<Footer />
</div>
