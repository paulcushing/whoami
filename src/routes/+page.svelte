<script>
	import { onMount } from 'svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import { data } from '../components/Data.svelte';
	import { push, pop, replace, location } from 'svelte-spa-router';

	let page = 0;
	let personalize;
	let name;
	let gender;

	onMount(async () => {
		//console.log(data);
		if (typeof localStorage !== 'undefined') {
			name = localStorage.getItem('name') || 'Guest';
			personalize = JSON.parse(localStorage.getItem('personalize')) || false;
			gender = localStorage.getItem('gender') || 'female';
		}

		if (typeof window !== 'undefined' && $location && $location !== '/') {
			let incomingPageNum = $location.substring(1);

			page = incomingPageNum;
		}
	});

	function handleClickNext() {
		if (name !== localStorage.getItem('name')) {
			localStorage.setItem('name', name);
		}
		if (personalize !== localStorage.getItem('personalize')) {
			localStorage.setItem('personalize', JSON.stringify(personalize));
		}
		if (gender !== localStorage.getItem('gender')) {
			localStorage.setItem('gender', gender);
		}

		page++;

		let url = '#/' + page;

		history.pushState('', '', url);
	}

	function handleClickPrev() {
		page--;

		let url = '#/' + page;

		history.pushState('', '', url);
	}

	function handleClickHome() {
		page = 0;

		let url = '/';

		history.pushState('', '', url);
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('hashchange', function () {
			let incomingPageNum = $location.substring(1);

			page = incomingPageNum;
		});
	}
</script>

<svelte:head>
	<title>Who Am I - Who Does Jesus Say That I Am?</title>
	<html lang="en" />
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
							class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
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
							class="p-2 rounded-lg border-2 border-slate-400 w-full max-w-xs mb-2"
							placeholder={name}
							bind:value={name}
						/>

						<select
							bind:value={gender}
							class="form-select form-select-sm
							max-w-xs
							appearance-none
							block
							w-full
							px-2
							py-1
							text-sm
							font-normal
							text-gray-700
							bg-white bg-clip-padding bg-no-repeat
							border border-solid border-gray-300
							rounded
							transition
							ease-in-out
							m-0
							focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							aria-label=".form-select-sm example"
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					{/if}
					<div class="flex items-center mt-2">
						<button
							on:click={handleClickNext}
							class="touch-pan-y inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Get started
						</button>
					</div>
				</div>
			</div>
			<div class="relative lg:w-1/2">
				<img src="/bible.jpg" alt="Hero" class="object-cover w-full lg:absolute h-80 lg:h-full" />
			</div>
		</section>
		<footer class="py-10 bg-black">
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
