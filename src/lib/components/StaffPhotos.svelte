<script>
	import photo1 from '$lib/assets/headshots/photo-1.png';
	import photo2 from '$lib/assets/headshots/photo-2.png';
	import photo3 from '$lib/assets/headshots/photo-3.png';
	import photo4 from '$lib/assets/headshots/photo-4.png';

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
<div class="flex flex-wrap justify-between gap-6 mt-6">
	{#each staffData as i}
		<div class="flex flex-col items-center gap-2 ">
			<div
				class="customTransition relative flex h-[13rem] min-w-[10rem]  overflow-clip rounded-b-[100vw] hover:scale-105  "
			>
				<div
					class="backgroundPhotoTexture absolute bottom-0 h-[10rem] w-[10rem] rounded-t-full  "
				/>
				<img
					src={i.photoSRC}
					alt="person headshot"
					class="aboslute customTransition absolute bottom-0 h-[10rem] w-[10rem] -translate-y-1 scale-[130%] hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
				/>
			</div>
			<div class="flex flex-col sm:items-center ">
				<div class="flex text-xl font-normal text-bright  ">{i.name}</div>
				<div class=" font-thin flex text-textLight  ">{i.role}</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.customTransition {
		transition: transform 350ms ease-in-out;
	}

	.backgroundPhotoTexture {
		background-image: url('$lib/assets/patterns/canvas-texture.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
