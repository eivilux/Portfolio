<script lang="ts">
	import { getNavigationItems, getCollapsedNavigationItems } from './Topbar';

	const navigationItems = getNavigationItems();
	const responsiveNavigationItems = getCollapsedNavigationItems();
</script>

<nav class="sticky border-b border-neutral-800 px-[30px] backdrop-blur-md">
	<div class="mx-auto flex h-16 w-full max-w-[var(--spacing-site)] items-center justify-between">
		<div>
			<a href="#top" class="text-xl font-semibold text-text uppercase"> Céline Campi </a>
		</div>

		<!-- Navigation desktop -->
		<div class="hidden gap-10 text-xs text-muted uppercase md:flex">
			{#each navigationItems as item}
				<a href={`#${item.id}`} class="transition-colors hover:text-primary/70">
					{item.title}
				</a>
			{/each}
		</div>

		<!-- Navigation responsive -->
		<div class="flex gap-4 text-xs text-primary uppercase md:hidden">
			{#each responsiveNavigationItems as item}
				<a href={`#${item.id}`} class="transition-colors hover:text-primary/70">
					{item.title}
				</a>
			{/each}
		</div>
	</div>
</nav>
