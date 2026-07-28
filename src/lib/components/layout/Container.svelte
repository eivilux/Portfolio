<script lang="ts">
	import { containerList } from './Container';
</script>

<nav>
	{#each containerList as element, index}
		<div class="w-full {index !== 0 ? 'border-t border-neutral-800' : ''}">
			<div
				class="mx-auto flex w-full max-w-[var(--spacing-site)] flex-col items-center justify-between px-[10px] py-[80px]"
			>
				<div class="w-full text-primary">
					0{index + 1} — {element}
				</div>
			</div>
		</div>
	{/each}
</nav>
