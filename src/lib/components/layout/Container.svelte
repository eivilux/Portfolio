<script lang="ts">
	import { containerList } from './Container';
</script>

<nav>
	{#each containerList as element}
		{element}
	{/each}
	i
</nav>
