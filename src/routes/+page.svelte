<script>
	import { onMount } from 'svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import { data } from '../components/Data.svelte';
	import { PUBLIC_MIXPANEL_TOKEN } from '$env/static/public';

	/* Mixpanel */
	import mixpanel from 'mixpanel-browser';
	mixpanel.init(PUBLIC_MIXPANEL_TOKEN, { debug: true });

	let page = 0;
	let personalize;
	let name;
	let gender;

	onMount(async () => {
		if (typeof localStorage !== 'undefined') {
			name = localStorage.getItem('name') || 'Guest';
			personalize = JSON.parse(localStorage.getItem('personalize')) || false;
			gender = localStorage.getItem('gender') || 'female';
		}

		if (typeof window !== 'undefined') {
			let newPageNumber = window.location.hash.substring(2);

			page = newPageNumber ? newPageNumber : 0;
		}

		mixpanel.track('Viewed Page', {
			Page: 'Home'
		});
	});

	function handleClickStart() {
		if (name !== localStorage.getItem('name')) {
			localStorage.setItem('name', name);
		}
		if (personalize !== localStorage.getItem('personalize')) {
			localStorage.setItem('personalize', JSON.stringify(personalize));
		}
		if (gender !== localStorage.getItem('gender')) {
			localStorage.setItem('gender', gender);
		}

		mixpanel.track('Clicked Start', {
			Personalized: personalize,
			'Page Number': 1
		});

		page = 1;

		let url = '#/1';

		history.pushState('', '', url);
	}

	function handleClickNext() {
		page++;

		let url = '#/' + page;

		mixpanel.track('Clicked Forward', {
			'Page Number': page
		});

		history.pushState('', '', url);
	}

	function handleClickPrev() {
		page--;

		let url = page == '0' ? '/' : '#/' + page;

		mixpanel.track('Clicked Back', {
			'Page Number': page
		});

		history.pushState('', '', url);
	}

	function handleClickHome() {
		page = 0;

		let url = '/';

		mixpanel.track('Clicked Home', {
			'Page Number': page
		});

		history.pushState('', '', url);
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('hashchange', function () {
			page = window.location.hash.substring(2) || 0;
		});
	}
</script>

<svelte:head>
	<title>Who Am I - Who Does Jesus Say That I Am?</title>
</svelte:head>

{#if page === 0}
	<div class="flex flex-col w-full min-h-screen m-0 p-0 justify-between">
		<section class="flex flex-col flex-grow w-full overflow-hidden bg-white lg:flex-row sm:mx-auto">
			<div class="flex justify-end p-8 bg-white lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2">
				<div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
					<p
						class="inline-block px-2 py-1 mb-5 font-medium tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full text-xxs"
					>
						Do you <i>really</i> know...
					</p>
					<h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl">
						Who Am I?
					</h5>
					<p class="py-5 mb-5 text-gray-600 lg:text-xl">
						Sometimes it helps to be reminded of who we REALLY are, rather than what others have
						told us. Here is a beautiful sample of what <span class="font-bold">Jesus</span> says about
						YOU, along with the verses.
					</p>
					<div class="form-check form-switch">
						<input
							class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
							type="checkbox"
							role="switch"
							id="enable-personalize"
							bind:checked={personalize}
						/>
						<label class="form-check-label inline-block text-gray-800" for="enable-personalize"
							>Personalize</label
						>
					</div>
					{#if personalize === true}
						<label for="name">Name:</label>
						<input
							id="name"
							type="text"
							placeholder={name}
							class="input input-bordered input-secondary w-full max-w-xs mb-2"
							bind:value={name}
						/>

						<select class="select select-primary w-full max-w-xs" bind:value={gender}>
							<option disabled selected>Select Gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					{/if}
					<div class="flex items-center mt-2">
						<button
							on:click={handleClickStart}
							class="touch-pan-y inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Get started
						</button>
					</div>
				</div>
			</div>
			<div class="lg:w-1/2">
				<img src="/bible.jpg" alt="Hero" class="object-cover w-full lg:absolute h-80 lg:h-full" />
			</div>
		</section>
		<footer class="py-10 bg-black z-10">
			<div class="px-10 mx-auto max-w-7xl">
				<div class="flex flex-col justify-between text-center md:flex-row">
					<p class="order-last text-sm leading-tight text-gray-500 md:order-first">
						Built for God's glory and YOUR joy!
					</p>
					<ul class="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
						<li>
							<ContactForm />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
{:else}
	<div class="flex flex-col w-full min-h-screen m-0 p-0 justify-between mb-24">
		<section class="flex flex-col w-full overflow-hidden bg-white sm:mx-auto mb-auto">
			<div class="flex justify-center p-8 bg-white lg:py-16 lg:px-2 lg:pl-10">
				<div class="flex flex-col items-start justify-center w-full lg:max-w-2xl">
					<p class="py-5 mb-5 text-gray-600 text-3xl lg:text-6xl">
						<span class="font-bold"
							>{personalize
								? gender === 'female'
									? data[page].feminine.replaceAll('{name}', name)
									: data[page].masculine.replaceAll('{name}', name)
								: data[page].title}</span
						>
					</p>
					<p class="py-5 mb-5 text-gray-900 underline text-xl lg:text-2xl">
						{@html data[page].verse}
					</p>
				</div>
			</div>
		</section>
		<section class="flex flex-col w-full overflow-hidden fixed left-0 bottom-0 sm:mx-auto">
			<div class="flex justify-center p-8 bg-white">
				<div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
					<div class="flex w-full justify-between">
						<button
							on:click={handleClickPrev}
							class="touch-pan-y inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Previous
						</button>
						{#if page < 50}
							<button
								on:click={handleClickNext}
								class="touch-pan-y inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
								data-rounded="rounded-lg"
								data-primary="gray-900"
							>
								Next
							</button>
						{:else}
							<button
								on:click={handleClickHome}
								class="touch-pan-y inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
								data-rounded="rounded-lg"
								data-primary="gray-900"
							>
								Home
							</button>
						{/if}
					</div>
				</div>
			</div>
		</section>
	</div>
{/if}
