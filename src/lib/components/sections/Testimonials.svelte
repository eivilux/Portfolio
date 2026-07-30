<script lang="ts">
	import { testimonials } from './Testimonials.ts';
</script>

<div class="flex flex-col">
	{#each testimonials as testimonial}
		<div
			class="px-[clamp(var(--spacing-topbar-margin-min),calc(var(--spacing-topbar-margin-min)+(100vw-var(--spacing-site))*0.4),80px)] pt-8 text-center"
		>
			<nav class="mb-8 text-xl leading-tight sm:text-2xl md:text-3xl">
				« {testimonial.testimonial} »
			</nav>

			<nav class="mb-1 text-xs text-primary uppercase sm:text-sm">
				{testimonial.name}
			</nav>

			<nav class="text-xs text-muted-subtle uppercase sm:text-sm">
				{testimonial.job}
			</nav>
		</div>
	{/each}
</div>
