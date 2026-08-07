<script lang="ts">
	let fullname = '';
	let email = '';
	let organization = '';
	let date = '';
	let project = '';
</script>

<div class="flex w-full flex-col gap-12 lg:flex-row lg:gap-24">
	<div class="w-full lg:w-[42%]">
		<h2 class="text-3xl leading-none font-bold uppercase sm:text-4xl lg:text-5xl xl:text-6xl">
			<span>Réserver une </span>
			<span class="text-primary">conférence.</span>
		</h2>

		<p class="mt-8 w-full text-base leading-relaxed text-muted sm:text-lg lg:max-w-md">
			Vous souhaitez me faire intervenir dans votre entreprise en format 7, 20, 45 ou 60 minutes ?
			Contactez-moi directement.
		</p>

		<div class="mt-12 space-y-8">
			<div>
				<div class="mb-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">Email</div>

				<a
					href="mailto:contact@celinecampi.com"
					class="text-base text-text transition hover:text-primary sm:text-lg"
				>
					contact@celinecampi.com
				</a>
			</div>

			<div>
				<div class="mb-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
					Luxembourg
				</div>

				<a
					href="tel:+352691197722"
					class="text-base text-text transition hover:text-primary sm:text-lg"
				>
					(+352) 691 197 722
				</a>
			</div>

			<div>
				<div class="mb-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">France</div>

				<a
					href="tel:+33664367632"
					class="text-base text-text transition hover:text-primary sm:text-lg"
				>
					(+33) 6 64 36 76 32
				</a>
			</div>
		</div>
	</div>

	<form class="flex w-full flex-col gap-8 lg:w-[58%] lg:gap-10">
		<input
			bind:value={fullname}
			type="text"
			placeholder="Nom complet"
			class="w-full border-b border-muted-subtle bg-transparent pb-4 text-text transition-colors outline-none placeholder:text-muted focus:border-primary"
		/>

		<input
			bind:value={email}
			type="email"
			placeholder="Adresse email professionnelle"
			class="w-full border-b border-muted-subtle bg-transparent pb-4 text-text transition-colors outline-none placeholder:text-muted focus:border-primary"
		/>

		<input
			bind:value={organization}
			type="text"
			placeholder="Organisation"
			class="w-full border-b border-muted-subtle bg-transparent pb-4 text-text transition-colors outline-none placeholder:text-muted focus:border-primary"
		/>

		<div>
			<label class="mb-2 block text-xs font-semibold tracking-[0.3em] text-primary uppercase">
				Date souhaitée
			</label>
			<input
				bind:value={date}
				type="date"
				class="w-full border-b border-muted-subtle bg-transparent pb-4 text-text transition-colors outline-none focus:border-primary"
			/>
		</div>

		<textarea
			bind:value={project}
			rows="4"
			placeholder="Votre projet"
			class="w-full resize-none border-b border-muted-subtle bg-transparent pb-4 text-text transition-colors outline-none placeholder:text-muted focus:border-primary"
		></textarea>

		<button
			type="submit"
			class="mt-2 w-full rounded-md bg-primary px-6 py-4 text-center text-background transition hover:opacity-90 sm:w-fit"
		>
			Envoyer le message
		</button>
	</form>
</div>
