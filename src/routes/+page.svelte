<script lang="ts">
	import type { Deal } from '$lib/entities/deal';
	import { DealsPresenter } from '$lib/features/deals';
	let { data }: { data: { [key: string]: Deal[] } } = $props();
	console.log(data);
</script>

<main class="p-3">
	<div class="flex flex-col gap-y-4">
		{#each Object.entries(data) as [category, deals]}
			<DealsPresenter {category} {deals} />
		{/each}
	</div>
</main>
