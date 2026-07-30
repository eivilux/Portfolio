<script lang="ts">
	import { expertises } from './Expertises.ts';
</script>

<div class="space-y-12">
	<h2 class="text-4xl font-bold text-text sm:text-5xl">Domaines d'expertise</h2>

	<div class="grid grid-cols-1 border border-muted-subtle lg:grid-cols-3">
		{#each expertises as expertise, index}
			<div
				class="bg-background p-12 transition-colors hover:bg-muted/5 {index < expertises.length - 1
					? 'border-b border-muted-subtle lg:border-r lg:border-b-0'
					: ''}"
			>
				<div class="mb-16 text-5xl font-bold text-primary/50">
					{expertise.number}
				</div>

				<h3 class="mb-6 text-3xl leading-tight font-bold text-text">
					{expertise.title}
				</h3>

				<p class="text-justify text-lg leading-relaxed text-muted">
					{expertise.description}
				</p>
			</div>
		{/each}
	</div>
</div>
