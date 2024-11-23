<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '$lib/shadcn/ui/button';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		},
		args: {
			variant: 'default',
			size: 'default',
			disabled: false,
			onClick: fn()
		},
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm', 'lg', 'icon']
			},
			disabled: {
				control: { type: 'boolean' }
			}
		}
	});
</script>

<!-- Stories -->
<Story name="Default" args={{ variant: 'default', size: 'default', children: 'Default Button' }}>
	{#snippet children(args)}
		<Button {...args}>HELLOOOO</Button>
	{/snippet}
</Story>

<Story
	name="Destructive"
	args={{ variant: 'destructive', size: 'default', children: 'Destructive Button' }}
>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story name="Outline" args={{ variant: 'outline', size: 'default', children: 'Outline Button' }}>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story
	name="Secondary"
	args={{ variant: 'secondary', size: 'default', children: 'Secondary Button' }}
>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story name="Ghost" args={{ variant: 'ghost', size: 'default', children: 'Ghost Button' }}>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story name="Link" args={{ variant: 'link', size: 'default', children: 'Link Button' }}>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story name="Small Size" args={{ variant: 'default', size: 'sm', children: 'Small Button' }}>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story name="Large Size" args={{ variant: 'default', size: 'lg', children: 'Large Button' }}>
	{#snippet children(args)}
		<Button {...args}>Hello, World</Button>
	{/snippet}
</Story>

<Story name="Icon Button" args={{ variant: 'default', size: 'icon', children: '🔔' }}>
	{#snippet children(args)}
		<Button {...args} />
	{/snippet}
</Story>
