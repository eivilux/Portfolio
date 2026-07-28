<script lang="ts">
	import { containerList } from './Container';
</script>

<nav>
	{#each containerList as item, index}
		<div class="w-full {index !== 0 ? 'border-t border-neutral-800' : ''}">
			<div class="mx-auto flex w-full max-w-[var(--spacing-site)] flex-col px-[10px] py-[80px]">
				<div class="pb-4 text-primary">
					0{index} — {item.name}
				</div>
				<div>
					<item.content />
				</div>
			</div>
		</div>
	{/each}
</nav>
