<script>
	import photo1 from '$lib/assets/headshots/photo-1-opt.webp';
	import photo2 from '$lib/assets/headshots/photo-2-opt.webp';
	import photo3 from '$lib/assets/headshots/photo-3-opt.webp';
	import photo4 from '$lib/assets/headshots/photo-4-opt.webp';
	import toast from 'svelte-french-toast';

	function showToast() {
		toast.success('This is a fictional person at this fictional company. But thanks for clicking!');
	}

	let staffData = [
		{
			name: 'Sarah Jones',
			role: 'Managing Director',
			photoSRC: photo1
		},
		{
			name: 'Keisha Davis',
			role: 'Senior Consultant',
			photoSRC: photo2
		},
		{
			name: 'Ana Torres',
			role: 'Consultant',
			photoSRC: photo3
		},
		{
			name: 'Matt Walsh',
			role: 'Consultant',
			photoSRC: photo4
		}
	];
</script>

<!-- put a smaller max width maybe for big screen sizes - then you won't have to scale everything infinitely -->
<div
	class="mt-[1rem] flex flex-wrap justify-between gap-6 sm:mt-[2rem] 2xl:justify-center 2xl:gap-[6rem]"
>
	{#each staffData as i}
		<div class="flex flex-col items-center gap-2 ">
			<div
				class="customTransition relative flex h-[13rem] min-w-[8rem] overflow-clip  rounded-b-[100vw] hover:scale-105 sm:min-w-[10rem]  "
			>
				<div
					class="backgroundPhotoTexture absolute bottom-0 h-[8rem] w-[8rem]   rounded-t-full sm:h-[10rem] sm:w-[10rem]  "
				/>
				<div class="container">
					<img
						src={i.photoSRC}
						loading="lazy"
						alt="person headshot"
						class="aboslute customTransition absolute bottom-0 h-[8rem] w-[8rem] -translate-y-1 scale-[130%] hover:-translate-y-3 hover:scale-[130%] hover:cursor-pointer  hover:ease-in-out sm:h-[10rem] sm:w-[10rem]   "
					/>
				</div>
			</div>
			<div class="flex flex-col items-center ">
				<div class="flex text-xl font-normal text-bright  ">{i.name}</div>
				<div class=" flex font-thin text-textLight  ">{i.role}</div>
				<div
					on:click={showToast}
					class="mt-2 flex items-center justify-center gap-1 rounded-md bg-bright px-4 pt-[0.3rem] pb-[0.4rem] text-center text-xs font-thin text-white hover:cursor-pointer hover:bg-brightDark"
				>
					<div class="flex">See bio</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.customTransition {
		transition: transform 350ms ease-in-out;
	}

	.backgroundPhotoTexture {
		background-image: url('$lib/assets/patterns/canvas-texture-opt.webp');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.container {
		width: 8rem;
		height: 8rem;
		overflow: hidden;
		border-radius: 50%;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
