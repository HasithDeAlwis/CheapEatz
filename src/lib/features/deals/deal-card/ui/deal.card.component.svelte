<script lang="ts">
	import StoreTag from './store-tag.component.svelte';
	import SavedTag from './saved-tag.component.svelte';
	import type { Deal } from '$lib/entities/deal';
	let { deal }: { deal: Deal } = $props();
</script>

<main class="h-auto w-52 rounded-lg border-border bg-primary sm:w-72">
	<a href={deal.link}>
		<div class="relative h-28 w-52 sm:h-44 sm:w-72">
			{#if deal.savedPercentage > 15}<SavedTag
					savedPercentage={deal.savedPercentage}
					className="absolute top-2 left-2"
				/>
			{/if}
			<img
				class="h-full w-full rounded-t-lg object-cover"
				src={deal.image.src}
				alt={`food from ${deal.storeName}`}
			/>
		</div>
		<article class="flex flex-col gap-y-2 p-3 text-primary-foreground">
			<div class="flex flex-row items-center justify-between gap-x-1">
				<h2 class="font-sans text-lg font-bold lg:text-xl">{deal.name}</h2>
				<p class="whitespace-nowrap text-base text-slate-50">{deal.distance} km</p>
			</div>
			<div>
				<StoreTag storeName={deal.storeName} />
			</div>
		</article>
	</a>
</main>
