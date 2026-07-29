<script lang="ts">
	import { app_container } from '$lib/app/AppContainer';
</script>

<nav class="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 backdrop-blur-xl">
	<div
		class="mx-auto flex h-topbar w-full max-w-[var(--spacing-site)] items-center justify-between px-[clamp(var(--spacing-topbar-margin-min),calc(var(--spacing-topbar-margin-min)+(100vw-var(--spacing-site))*0.4),50px)]"
	>
		<div>
			<a href="#top" class="text-xl font-semibold text-text uppercase"> Céline Campi </a>
		</div>

		<!-- Navigation desktop -->
		<div class="hidden gap-10 text-xs text-muted uppercase md:flex">
			{#each app_container.items() as item}
				<a href={`#${item.link}`} class="transition-colors hover:text-primary/70">
					{item.name}
				</a>
			{/each}
		</div>

		<!-- Navigation responsive -->
		<div class="flex gap-4 text-xs text-primary uppercase md:hidden">
			{#each app_container.importants() as item}
				<a href={`#${item.link}`} class="transition-colors hover:text-primary/70">
					{item.name}
				</a>
			{/each}
		</div>
	</div>
</nav>
