<script lang="ts">
	import { expertises } from './Podcasts.ts';
</script>

<div class="space-y-12">
	<div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
		<h2 class="text-4xl leading-none font-bold sm:text-5xl lg:text-6xl">
			<span class="inline lg:block">Manag'aiRH,</span>
			<span class="inline lg:block">le podcast.</span>
		</h2>

		<p class="max-w-xl text-justify text-base leading-relaxed text-muted sm:text-lg lg:text-right">
			Parce qu'une conférence se vit en quelques instants mais qu'une réflexion peut se poursuivre
			bien au-delà, j'ai créé Manag'aiRH : des épisodes courts de <span class="text-primary"
				>5 minutes</span
			>, concrets et accessibles, pensés pour les managers, dirigeants et professionnels RH.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-px bg-muted-subtle lg:grid-cols-3">
		{#each expertises as expertise}
			<div class="bg-background p-10 lg:p-12">
				<div class="mb-10 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
					{expertise.label}
				</div>

				<h3 class="mb-6 text-2xl font-bold text-text">
					{expertise.title}
				</h3>

				<p class="text-justify text-base leading-relaxed text-muted">
					{expertise.description}
				</p>
			</div>
		{/each}
	</div>

	<div class="my-12 overflow-hidden rounded-lg">
		<img
			src="/images/managairh-banner.jpg"
			alt="Manag'aiRH - Podcast RH et management"
			class="h-64 w-full object-cover sm:h-80"
		/>
	</div>

	<div>
		<a
			href="https://podcast.ausha.co/manag-airh"
			class="block w-full rounded-md bg-primary px-6 py-4 text-center text-background transition hover:opacity-90 lg:inline-block lg:w-fit"
		>
			Écouter Manag'aiRH
		</a>
	</div>
</div>
