<script lang="ts">
	import type { Deal } from '$lib/entities/deal';
	import { ScrollArea } from '$lib/shadcn/ui/scroll-area';
	import DealCard from '$lib/features/deals/deal-card/ui/deal.card.component.svelte';
	let { category, deals }: { category: string; deals: Deal[] } = $props();
</script>

<div class="flex flex-col gap-y-2">
	<h1 class="text-3xl font-bold underline">{category}</h1>
	<ScrollArea class="flex h-auto w-full" scroll orientation="horizontal">
		<div class="flex flex-row gap-x-4">
			{#each deals as deal}
				<DealCard {deal} />
			{/each}
		</div>
	</ScrollArea>
</div>
