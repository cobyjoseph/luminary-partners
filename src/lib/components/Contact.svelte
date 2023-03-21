<div class="mt-[6rem] px-[8%]">
	<div class=" font-satoshi text-4xl font-thin text-bright  ">Get in touch.</div>
	<div class="items-center gap-[5rem]  sm:grid sm:grid-cols-2 mt-[3rem]">
		<div class="  font-satoshi text-2xl font-thin text-textLight">
			Get in touch using the form or feel free to reach us at <a
				href="mailto:coby.joseph@gmail.com"
				class="text-secondaryDark">contact@luminarypartners.com</a
			>.
		</div>

		<form
			class="text-primary  mt-10 flex w-full flex-col flex-nowrap gap-5 sm:mt-0 "
			method="POST"
			action="?/contactAction"
		>
			<div class=" flex flex-col">
				<div class="text-sm font-bold text-secondaryDark ">NAME</div>
				<input
					class="mt-1 rounded-sm border border-b-bright    bg-secondaryDark bg-opacity-30 p-2"
					type="text"
					name="name"
					placeholder="Full name"
					required
				/>
			</div>
			<div class="flex flex-col">
				<div class="text-sm font-bold  text-secondaryDark ">EMAIL</div>
				<input
					class="mt-1 rounded-sm  border border-b-bright  bg-secondaryDark bg-opacity-30 p-2"
					type="email"
					name="email"
					placeholder="Email"
					required
				/>
			</div>
			<div class="flex w-full flex-col ">
				<div class="">
					<div class="text-sm font-bold text-secondaryDark ">MESSAGE</div>
					<textarea
						name="message"
						rows="3"
						class="mt-1 min-w-full rounded-sm  border border-b-bright   bg-secondaryDark bg-opacity-30 p-2"
						placeholder="Let us know how we can help."
					/>
				</div>
			</div>
			<div class="flex">
				<button
					type="submit"
					class="mt-2 flex justify-center rounded-sm  bg-bright px-4 py-1  text-lg  font-semibold text-white "
					>Send</button
				>
			</div>
		</form>
	</div>
</div>

<style>
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: white;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: white;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: white;
	}
</style>
