<script lang="ts">
	import { conferences } from './Conferences';
</script>

<div class="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-16">
	<div class="lg:col-span-5">
		<img
			src="/images/conferences.jpg"
			alt="Conférence de Céline Campi"
			class="h-full w-full object-cover"
		/>
	</div>

	<div class="flex flex-col lg:col-span-7">
		<h2 class="mb-12 text-4xl leading-none font-bold sm:text-5xl lg:text-6xl">
			L'art de transmettre.
		</h2>

		{#each conferences as conference, index}
			<div class={index !== conferences.length - 1 ? 'border-b border-muted-subtle pb-10' : ''}>
				<div class="mb-5 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
					{conference.label}
				</div>

				<h3 class="mb-4 text-3xl leading-tight font-bold text-text">
					{conference.title}
				</h3>

				<p class="text-justify text-base leading-relaxed text-muted sm:text-lg">
					{conference.description}
				</p>
			</div>

			{#if index !== conferences.length - 1}
				<div class="h-10"></div>
			{/if}
		{/each}
		<a href="#contact" class="group mt-12 inline-flex w-fit flex-col gap-3">
			<span
				class="text-xs font-semibold tracking-[0.3em] text-primary uppercase transition-colors group-hover:text-text"
			>
				Programmer une intervention
			</span>

			<span class="h-px w-64 bg-primary transition-all duration-300 group-hover:w-72"></span>
		</a>
	</div>
</div>
