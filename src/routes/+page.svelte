<script lang="ts">
	import '../app.css';

	import Topbar from '$lib/components/layout/Topbar.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Topbar />

	<main class="flex-1">
		<slot />
	</main>
</div>
