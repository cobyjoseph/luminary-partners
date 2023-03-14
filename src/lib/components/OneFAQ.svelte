<script>
	import { FAQStore } from '$lib/stores/FAQStores';
	import { slide } from 'svelte/transition';

	let FAQValues;
	let showFAQ1 = false;

	function toggleFAQ1() {
		showFAQ1 = !showFAQ1;
	}

	FAQStore.subscribe((value) => {
		FAQValues = value;
	});
</script>

<div class="items-center font-satoshi text-secondaryDarkest mt-3">
	<button class=" w-full flex gap-2     text-left" on:click={toggleFAQ1}>
		<div class="">
			{#if !showFAQ1}
				<div class="flex items-start w-3">+</div>
			{:else}
				<div class="flex items-start w-3">-</div>
			{/if}
		</div>

		<div class="flex flex-col gap-2 text-secondaryDarkest">
			<div class="text-Q font-bold ">What is your work process like?</div>

			{#if showFAQ1}
				<div transition:slide={{ duration: 200 }}>
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				</div>
			{/if}
		</div>
	</button>
</div>
