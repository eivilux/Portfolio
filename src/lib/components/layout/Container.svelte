<script lang="ts">
	import { app_container } from '$lib/app/AppContainer';
</script>

<nav>
	{#each app_container.items() as item, index}
		<div class="w-full {index !== 0 ? 'border-t border-neutral-800' : ''}" id={item.link}>
			<div
				class="mx-auto flex w-full max-w-[var(--spacing-site)] flex-col px-[var(--spacing-topbar-margin-min)] py-[80px]"
			>
				<div class="pb-4 text-primary">
					0{index} — {item.name}
				</div>
				<div class="text-text">
					<item.content />
				</div>
			</div>
		</div>
	{/each}
</nav>
