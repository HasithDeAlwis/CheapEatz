<script lang="ts">
	let { savedPercentage, className }: { savedPercentage: number; className: string } = $props();
	import { cn } from '$lib/utils.js';
</script>

<div class={cn('rounded-xl border-border bg-secondary p-1', className)}>
	<p class="text-sm text-secondary-foreground lg:text-base">
		️‍🔥 Saved <span class="text-primary">{savedPercentage}</span>%
	</p>
</div>
