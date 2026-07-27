<script lang="ts">
	import { socialLinks } from './Footer';
</script>

<nav>
	<div
		class="mx-auto flex h-25 w-full max-w-[var(--spacing-site)] items-center justify-between border-t border-neutral-800 px-[10px]"
	>
		<div class="text-sm text-muted-subtle">© 2026 Céline Campi. Tous droits réservés.</div>

		<div class="flex gap-6 text-xs text-muted-subtle uppercase">
			{#each socialLinks as item}
				<a href={`${item.url}`} class="transition-colors hover:text-primary/70" target="_blank">
					{item.title}
				</a>
			{/each}
		</div>
	</div>
</nav>
