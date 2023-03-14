<script>
	import { FAQStore } from '$lib/stores/FAQStores';
	import { slide } from 'svelte/transition';

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
