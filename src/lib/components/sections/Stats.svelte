<script lang="ts">
	import { stats } from './Stats';
</script>

<div class="grid grid-cols-2 gap-y-16 lg:grid-cols-4">
	{#each stats as stat}
		<div class="flex flex-col">
			<div class="mb-6 text-7xl leading-none font-bold text-primary sm:text-8xl">
				{stat.value}
			</div>

			<div class="max-w-xs text-xs font-semibold tracking-[0.25em] text-muted-subtle uppercase">
				{stat.label}
			</div>
		</div>
	{/each}
</div>
