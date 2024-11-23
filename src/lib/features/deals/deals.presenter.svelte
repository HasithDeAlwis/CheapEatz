<script lang="ts">
	import type { Deal } from '$lib/entities/deal';
	import DealCarousel from './deal-carousel/ui/deal-carousel.component.svelte';
	let { category, deals }: { category: string; deals: Deal[] } = $props();
</script>

<section class="mx-auto max-w-screen-xl p-4">
	<DealCarousel {category} {deals} />
</section>
