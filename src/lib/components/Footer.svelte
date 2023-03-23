<script lang="ts">
	import facebook from '$lib/assets/footer/facebook-icon.svg';
	import linkedIn from '$lib/assets/footer/linkedin-icon.svg';
	import twitter from '$lib/assets/footer/twitter-icon.svg';
	import logo from '$lib/assets/logo/luminary-partners-logo-v0.3.png';

	import toast from 'svelte-french-toast';

	function showToast() {
		toast.success(
			'This is a fictional solution from this fictional company. But thanks for clicking!'
		);
	}
	function showToastLink() {
		toast.success(
			'This link goes nowhere because this company is made up. But thanks for clicking!'
		);
	}
</script>

<div
	class="mt-[5rem] w-full bg-brightDark px-[8%] py-[2.5rem] font-satoshi text-white 2xl:px-[14%] "
>
	<div class="grid grid-cols-2  gap-10 sm:grid sm:grid-cols-4  ">
		<div class="flex items-start  justify-center gap-2 ">
			<img src={logo} alt="logo" class="w-[2.5rem]" />

			<!-- <svg
					width="100%"
					height="100%"
					viewBox="0 0 223 253"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					xmlns:serif="http://www.serif.com/"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
					<g transform="matrix(1,0,0,1,-640.677,-427.749)">
						<g id="Logo-w-bg" serif:id="Logo w bg">
							<rect x="687.594" y="453.944" width="142.87" height="201.645" style="fill:white;" />
							<g
								id="cut-out-letter"
								serif:id="cut out letter"
								transform="matrix(0.503093,0,0,0.471309,420.871,335.077)"
							>
								<path
									d="M879.75,238.306L879.75,690.982C879.75,713.985 861.075,732.66 838.072,732.66L478.587,732.66C455.584,732.66 436.909,713.985 436.909,690.982L436.909,238.306C436.909,215.303 455.584,196.628 478.587,196.628L838.072,196.628C861.075,196.628 879.75,215.303 879.75,238.306ZM620.349,283.301L620.463,612.75L721.727,612.75L721.727,592.952L639.692,592.952L639.692,283.301L620.349,283.301ZM603.622,612.286L603.622,283.327L550.782,283.327L550.782,645.646L757.861,645.646L757.861,559.265L654.094,559.265L654.094,578.016L739.019,578.016L739.019,627.532L568.623,627.532L568.623,301.622L583.733,301.622L583.733,612.75L603.622,612.286Z"
									style="fill:rgb(68,70,124);"
								/>
							</g>
						</g>
					</g>
				</svg> -->

			<div class="  flex flex-col font-josefinSans font-bold   ">
				<div class="flex text-white ">Luminary</div>
				<div class=" flex text-white">Insights</div>
			</div>
		</div>
		<div class=" mx-auto flex gap-3 sm:hidden">
			<img src={facebook} alt="facebook logo" class="w-7 hover:cursor-pointer" />
			<img src={linkedIn} alt="linkedin logo" class="w-7 hover:cursor-pointer" />
			<img src={twitter} alt="twittre logo" class="w-7 hover:cursor-pointer" />
		</div>
		<div class="mx-auto flex flex-col justify-center  ">
			<div class="mb-1 text-sm font-bold">Solutions</div>
			<div on:click={showToast} class="text-sm font-thin hover:cursor-pointer hover:text-bright">
				For retail marketing
			</div>
			<div on:click={showToast} class="text-sm font-thin hover:cursor-pointer hover:text-bright">
				For employer branding
			</div>
			<div on:click={showToast} class="text-sm font-thin hover:cursor-pointer hover:text-bright">
				For corporate
			</div>
		</div>
		<div class="mx-auto flex flex-col justify-center ">
			<div class="mb-1 text-sm font-bold">Company</div>
			<div
				on:click={showToastLink}
				class="text-sm font-thin hover:cursor-pointer hover:text-bright"
			>
				About
			</div>
			<div
				on:click={showToastLink}
				class="text-sm font-thin hover:cursor-pointer hover:text-bright"
			>
				Contact
			</div>
			<div
				on:click={showToastLink}
				class="text-sm font-thin hover:cursor-pointer hover:text-bright"
			>
				Careers
			</div>
		</div>
		<div on:click={showToastLink} class=" hidden items-start gap-4 sm:flex">
			<img src={facebook} alt="facebook logo" class="w-8 hover:cursor-pointer" />
			<img src={linkedIn} alt="linkedin logo" class=" w-8 hover:cursor-pointer" />
			<img src={twitter} alt="twittre logo" class="w-8 hover:cursor-pointer" />
		</div>
	</div>
</div>
