<script lang="ts">
	import { app_container } from '$lib/app/AppContainer';

	let sectionNumber = $state(0);
</script>

<nav>
	{#each app_container.items() as item, index}
		<div
			class="w-full {index % 2 !== 0 ? 'bg-surface' : 'bg-background'} {index !== 0
				? 'border-t border-neutral-800'
				: ''}"
			id={item.link}
		>
			<div
				class="mx-auto flex w-full max-w-[var(--spacing-site)] flex-col px-[var(--spacing-topbar-margin-min)] py-[80px]"
			>
				{#if item.numbered}
					<div class="pb-4 text-primary">
						0{++sectionNumber} — {item.name}
					</div>
				{/if}

				<div class="text-text">
					<item.content />
				</div>
			</div>
		</div>
	{/each}
</nav>
