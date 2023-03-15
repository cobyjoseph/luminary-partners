<script>
	import { FAQStore } from '$lib/stores/FAQStores';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	function toggle() {
		active = !active;
	}

	export let FAQs;
	let showFAQ = false;

	function toggleFAQ() {
		showFAQ = !showFAQ;
	}
</script>

{#each FAQs as i}
	<div class="items-center font-satoshi text-secondaryDarkest mt-4">
		<button class=" w-full flex gap-2  text-left" on:click={toggleFAQ}>
			<div class="">
				{#if !showFAQ}
					<div class="flex items-start w-3">+</div>
				{:else}
					<div class="flex items-start w-3">-</div>
				{/if}
			</div>

			<div class="flex flex-col gap-2 text-secondaryDarkest text-xl">
				<div class="text-Q font-bold ">{i.question}</div>

				{#if showFAQ}
					<div transition:slide={{ duration: 200 }}>
						{i.answer}
					</div>
				{/if}
			</div>
		</button>
	</div>
{/each}

<style>
	.collapse__header {
		padding: 1rem;
		border: 1px solid grey;
		transition: background 200ms ease-in-out;
	}
	.collapse__header:hover {
		background: #f7f7f7;
	}
	.collapse__body {
		padding: 1rem;
		background: #f0f0f0;
	}
</style>
