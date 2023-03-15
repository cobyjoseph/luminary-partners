<script>
	import { onMount } from 'svelte';

	export let faqs;
	let active = false;

	onMount(() => {
		active = false;
	});

	function toggle() {
		active = !active;
	}
</script>

{#each faqs as faq}
	<div class="accordion">
		<div class="accordion-header" on:click={toggle}>
			<slot name="header" />
			{faq.question}
		</div>
		{#if active}
			<div class="accordion-body">
				<slot name="body" />
			</div>
		{/if}
	</div>
{/each}

<style>
	.accordion {
		border: 5px solid blue;
		border-radius: 5px;
		overflow: hidden;
		margin-bottom: 1rem;
	}

	.accordion-header {
		background-color: red;
		padding: 1rem;
		cursor: pointer;
	}

	.accordion-body {
		background-color: green;
		padding: 1rem;
	}
</style>
