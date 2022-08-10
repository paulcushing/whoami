<script>
	import { onMount } from 'svelte';
	import { loop_guard } from 'svelte/internal';

	const data = {
		0: {
			title: 'Home',
			verse: 'null'
		},
		1: {
			title:
				"I am God's child for I am born again of the incorruptible seed of the Word of God that lives and abides forever.",
			masculine:
				"{name} is God's child for he is born again of the incorruptible seed of the Word of God that lives and abides forever.",
			feminine:
				"{name} is God's child for she is born again of the incorruptible seed of the Word of God that lives and abides forever.",
			verse: '<a href="https://www.bible.com/bible/59/1PE.1.23" target="_blank">1 Peter 1:23</a>'
		},
		2: {
			title: 'I am forgiven of all my sins and washed in the blood.',
			masculine: '{name} is forgiven of all his sins and washed in the blood.',
			feminine: '{name} is forgiven of all her sins and washed in the blood.',
			verse:
				'<a href="https://www.bible.com/bible/59/EPH.1.7" target="_blank">Ephesians 1:7</a>; <a href="https://www.bible.com/bible/59/HEB.9.14" target="_blank">Hebrews 9:14</a>; <a href="https://www.bible.com/bible/59/COL.1.14" target="_blank">Colossians 1:14</a>; <a href="https://www.bible.com/bible/59/1JN.2.12" target="_blank">1 John 2:12</a>; <a href="https://www.bible.com/bible/59/1JN.1.9" target="_blank">1 John 1:9</a>'
		},
		3: {
			title: 'I am a new creation.',
			masculine: '{name} is a new creation.',
			feminine: '{name} is a new creation.',
			verse:
				'<a href="https://www.bible.com/bible/59/2CO.5.17" target="_blank">2 Corinthians 5:17</a>'
		},
		4: {
			title: 'I am a temple where the Holy Spirit lives.',
			masculine: '{name} is a temple where the Holy Spirit lives.',
			feminine: '{name} is a temple where the Holy Spirit lives.',
			verse:
				'<a href="https://www.bible.com/bible/59/1CO.6.19" target="_blank">1 Corinthians 6:19</a>'
		},
		5: {
			title: "I am delivered from the power of darkness; Christ brings me into God's kingdom.",
			masculine:
				"{name} is delivered from the power of darkness; Christ brings him into God's kingdom.",
			feminine:
				"{name} is delivered from the power of darkness; Christ brings her into God's kingdom.",
			verse: '<a href="https://www.bible.com/bible/59/COL.1.13" target="_blank">Colossians 1:13</a>'
		},
		6: {
			title: 'I am redeemed from the curse of the law.',
			masculine: '{name} is redeemed from the curse of the law.',
			feminine: '{name} is redeemed from the curse of the law.',
			verse: '<a href="https://www.bible.com/bible/59/1PE.1" target="_blank">1 Peter 1:18-19</a>'
		},
		7: {
			title: 'I am holy and without blame before God.',
			masculine: '{name} is holy and without blame before God.',
			feminine: '{name} is holy and without blame before God.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.1.4" target="_blank">Ephesians 1:4</a>'
		},
		8: {
			title: 'I am established to the end.',
			masculine: '{name} is established to the end.',
			feminine: '{name} is established to the end.',
			verse:
				'<a href="https://www.bible.com/bible/59/1CO.1.8" target="_blank">1 Corinthians 1:8</a>'
		},
		9: {
			title: 'I have been brought closer to God through the blood of Christ.',
			masculine: '{name} has been brought closer to God through the blood of Christ.',
			feminine: '{name} has been brought closer to God through the blood of Christ.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.2.13" target="_blank">Ephesians 2:13</a>'
		},
		10: {
			title: 'I am victorious.',
			masculine: '{name} is victorious.',
			feminine: '{name} is victorious.',
			verse: '<a href="https://www.bible.com/bible/59/REV.21.7" target="_blank">Revelation 21:7</a>'
		},
		11: {
			title: 'I am set free.',
			masculine: '{name} is set free.',
			feminine: '{name} is set free.',
			verse: '<a href="https://www.bible.com/bible/59/JHN.8" target="_blank">John 8:31-32</a>'
		},
		12: {
			title: 'I am strong in the Lord.',
			masculine: '{name} is strong in the Lord.',
			feminine: '{name} is strong in the Lord.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.6.10" target="_blank">Ephesians 6:10</a>'
		},
		13: {
			title: 'I am dead to sin.',
			masculine: '{name} is dead to sin.',
			feminine: '{name} is dead to sin.',
			verse:
				'<a href="https://www.bible.com/bible/59/ROM.6" target="_blank">Romans 6:2 & 11</a>; <a href="https://www.bible.com/bible/59/1PE.2.24" target="_blank">1 Peter 2:24</a>'
		},
		14: {
			title: 'I am more than a conqueror.',
			masculine: '{name} is more than a conqueror.',
			feminine: '{name} is more than a conqueror.',
			verse: '<a href="https://www.bible.com/bible/59/ROM.8.37" target="_blank">Romans 8:37</a>'
		},
		15: {
			title: 'I am a co-heir with Christ.',
			masculine: '{name} is a co-heir with Christ.',
			feminine: '{name} is a co-heir with Christ.',
			verse: '<a href="https://www.bible.com/bible/59/ROM.8" target="_blank">Romans 8:16-17</a>'
		},
		16: {
			title: 'I am sealed with the Holy Spirit of promise.',
			masculine: '{name} is sealed with the Holy Spirit of promise.',
			feminine: '{name} is sealed with the Holy Spirit of promise.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.1.13" target="_blank">Ephesians 1:13</a>'
		},
		17: {
			title: 'I am in Christ Jesus by His doing.',
			masculine: '{name} is in Christ Jesus by His doing.',
			feminine: '{name} is in Christ Jesus by His doing.',
			verse:
				'<a href="https://www.bible.com/bible/59/1CO.1.30" target="_blank">1 Corinthians 1:30</a>'
		},
		18: {
			title: 'I am accepted in Jesus Christ.',
			masculine: '{name} is accepted in Jesus Christ.',
			feminine: '{name} is accepted in Jesus Christ.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.1.5" target="_blank">Ephesians 1:5-6</a>'
		},
		19: {
			title: 'I am complete in Him.',
			masculine: '{name} is complete in Him.',
			feminine: '{name} is complete in Him.',
			verse: '<a href="https://www.bible.com/bible/59/COL.2.10" target="_blank">Colossians 2:10</a>'
		},
		20: {
			title: 'I am crucified with Christ.',
			masculine: '{name} is crucified with Christ.',
			feminine: '{name} is crucified with Christ.',
			verse: '<a href="https://www.bible.com/bible/59/GAL.2.20" target="_blank">Galatians 2:20</a>'
		},
		21: {
			title: 'I am alive with Christ.',
			masculine: '{name} is alive with Christ.',
			feminine: '{name} is alive with Christ.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.2" target="_blank">Ephesians 2:4-5</a>'
		},
		22: {
			title: 'I am free from condemnation.',
			masculine: '{name} is free from condemnation.',
			feminine: '{name} is free from condemnation.',
			verse: '<a href="https://www.bible.com/bible/59/ROM.8.1" target="_blank">Romans 8:1</a>'
		},
		23: {
			title: 'I am reconciled to God.',
			masculine: '{name} is reconciled to God.',
			feminine: '{name} is reconciled to God.',
			verse:
				'<a href="https://www.bible.com/bible/59/2CO.5.18" target="_blank">2 Corinthians 5:18</a>'
		},
		24: {
			title: 'I am qualified to share in his inheritance.',
			masculine: '{name} is qualified to share in his inheritance.',
			feminine: '{name} is qualified to share in his inheritance.',
			verse: '<a href="https://www.bible.com/bible/59/COL.1.12" target="_blank">Colossians 1:12</a>'
		},
		25: {
			title:
				'I am firmly rooted, established in my faith and overflowing with gratefulness and thankfulness.',
			masculine:
				'{name} is firmly rooted, established in his faith and overflowing with gratefulness and thankfulness.',
			feminine:
				'{name} is firmly rooted, established in her faith and overflowing with gratefulness and thankfulness.',
			verse: '<a href="https://www.bible.com/bible/59/COL.2.7" target="_blank">Colossians 2:7</a>'
		},
		26: {
			title: 'I am called by God.',
			masculine: '{name} is called by God.',
			feminine: '{name} is called by God.',
			verse: '<a href="https://www.bible.com/bible/59/2TI.1.9" target="_blank">2 Timothy 1:9</a>'
		},
		27: {
			title: 'I am chosen.',
			masculine: '{name} is chosen.',
			feminine: '{name} is chosen.',
			verse:
				'<a href="https://www.bible.com/bible/59/1TH.1.4" target="_blank">1 Thessalonians 1:4</a>; <a href="https://www.bible.com/bible/59/EPH.1.4" target="_blank">Ephesians 1:4</a>; <a href="https://www.bible.com/bible/59/1PE.2.9" target="_blank">1 Peter 2:9</a>'
		},
		28: {
			title: 'I am an ambassador of Christ.',
			masculine: '{name} is an ambassador of Christ.',
			feminine: '{name} is an ambassador of Christ.',
			verse:
				'<a href="https://www.bible.com/bible/59/2CO.5.20" target="_blank">2 Corinthians 5:20</a>'
		},
		29: {
			title: "I am God's workmanship created in Christ Jesus for good works.",
			masculine: "{name} is God's workmanship created in Christ Jesus for good works.",
			feminine: "{name} is God's workmanship created in Christ Jesus for good works.",
			verse: '<a href="https://www.bible.com/bible/59/EPH.2.10" target="_blank">Ephesians 2:10</a>'
		},
		30: {
			title: "I am the apple of my Father's eye.",
			masculine: "{name} is the apple of his Father's eye.",
			feminine: "{name} is the apple of her Father's eye.",
			verse:
				'<a href="https://www.bible.com/bible/59/DEU.32.10" target="_blank">Deuteronomy 32:10</a>; <a href="https://www.bible.com/bible/59/PSA.17.8" target="_blank">Psalm 17:8</a>'
		},
		31: {
			title: 'I am healed by the stripes of Jesus.',
			masculine: '{name} is healed by the stripes of Jesus.',
			feminine: '{name} is healed by the stripes of Jesus.',
			verse:
				'<a href="https://www.bible.com/bible/59/1PE.2.24" target="_blank">1 Peter 2:24</a>; <a href="https://www.bible.com/bible/59/ISA.53.6" target="_blank">Isaiah 53:6</a>'
		},
		32: {
			title: 'I am being changed into his image.',
			masculine: '{name} is being changed into his image.',
			feminine: '{name} is being changed into her image.',
			verse:
				'<a href="https://www.bible.com/bible/59/2CO.3.18" target="_blank">2 Corinthians 3:18</a>; <a href="https://www.bible.com/bible/59/PHP.1.6" target="_blank">Philippians 1:6</a>'
		},
		33: {
			title: 'I am raised up with Christ and am seated in heavenly places.',
			masculine: '{name} is raised up with Christ and is seated in heavenly places.',
			feminine: '{name} is raised up with Christ and is seated in heavenly places.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.2.6" target="_blank">Ephesians 2:6</a>'
		},
		34: {
			title: 'I am beloved of God.',
			masculine: '{name} is beloved of God.',
			feminine: '{name} is beloved of God.',
			verse:
				'<a href="https://www.bible.com/bible/59/COL.3.12" target="_blank">Colossians 3:12</a>; <a href="https://www.bible.com/bible/59/ROM.1.7" target="_blank">Romans 1:7</a>; <a href="https://www.bible.com/bible/59/1TH.1.4" target="_blank">1 Thessalonians 1:4</a>'
		},
		35: {
			title: 'I have the mind of Christ.',
			masculine: '{name} has the mind of Christ.',
			feminine: '{name} has the mind of Christ.',
			verse:
				'<a href="https://www.bible.com/bible/59/PHP.2.5" target="_blank">Philippians 2:5</a>; <a href="https://www.bible.com/bible/59/1CO.2.16" target="_blank">1 Corinthians 2:16</a>'
		},
		36: {
			title: 'I have obtained an inheritance.',
			masculine: '{name} has obtained an inheritance.',
			feminine: '{name} has obtained an inheritance.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.1.11" target="_blank">Ephesians 1:11</a>'
		},
		37: {
			title: 'I have access by one Spirit to the Father.',
			masculine: '{name} has access by one Spirit to the Father.',
			feminine: '{name} has access by one Spirit to the Father.',
			verse: '<a href="https://www.bible.com/bible/59/EPH.2.18" target="_blank">Ephesians 2:18</a>'
		},
		38: {
			title: 'I have overcome the world.',
			masculine: '{name} has overcome the world.',
			feminine: '{name} has overcome the world.',
			verse: '<a href="https://www.bible.com/bible/59/1JN.5.4" target="_blank">1 John 5:4</a>'
		},
		39: {
			title: 'I have everlasting life and will not be condemned.',
			masculine: '{name} has everlasting life and will not be condemned.',
			feminine: '{name} has everlasting life and will not be condemned.',
			verse:
				'<a href="https://www.bible.com/bible/59/JHN.5.24" target="_blank">John 5:24</a>; <a href="https://www.bible.com/bible/59/JHN.6.47" target="_blank">John 6:47</a>'
		},
		40: {
			title: 'I have the peace of God that transcends all understanding.',
			masculine: '{name} has the peace of God that transcends all understanding.',
			feminine: '{name} has the peace of God that transcends all understanding.',
			verse: '<a href="https://www.bible.com/bible/59/PHP.4.7" target="_blank">Philippians 4:7</a>'
		},
		41: {
			title:
				'I have received power-the power of the Holy Spirit; power to lay hands on the sick and see them recover; power to cast out demons; power over all the power of the enemy; nothing shall by any means hurt me.',
			masculine:
				'{name} has received power-the power of the Holy Spirit; power to lay hands on the sick and see them recover; power to cast out demons; power over all the power of the enemy; nothing shall by any means hurt {name}.',
			feminine:
				'{name} has received power-the power of the Holy Spirit; power to lay hands on the sick and see them recover; power to cast out demons; power over all the power of the enemy; nothing shall by any means hurt {name}.',
			verse:
				'<a href="https://www.bible.com/bible/59/EPH.6.10" target="_blank">Mark 16:17-18</a>; <a href="https://www.bible.com/bible/59/EPH.6.10" target="_blank">Luke 10:17-19</a>'
		},
		42: {
			title: 'I live by and in the law of the Spirit of Life in Christ Jesus.',
			masculine: '{name} lives by and in the law of the Spirit of Life in Christ Jesus.',
			feminine: '{name} lives by and in the law of the Spirit of Life in Christ Jesus.',
			verse: '<a href="https://www.bible.com/bible/59/ROM.8.2" target="_blank">Romans 8:2</a>'
		},
		43: {
			title: 'I walk in Christ Jesus.',
			masculine: '{name} walks in Christ Jesus.',
			feminine: '{name} walks in Christ Jesus.',
			verse: '<a href="https://www.bible.com/bible/59/COL.2.6" target="_blank">Colossians 2:6</a>'
		},
		44: {
			title: 'I can do all things in and through Christ Jesus.',
			masculine: '{name} can do all things in and through Christ Jesus.',
			feminine: '{name} can do all things in and through Christ Jesus.',
			verse:
				'<a href="https://www.bible.com/bible/59/PHP.4.13" target="_blank">Philippians 4:13</a>'
		},
		45: {
			title: 'We shall do even greater things than Jesus did.',
			masculine: '{name} shall do even greater things than Jesus did.',
			feminine: '{name} shall do even greater things than Jesus did.',
			verse: '<a href="https://www.bible.com/bible/59/JHN.14.12" target="_blank">John 14:12</a>'
		},
		46: {
			title:
				'I possess the Great One in me because greater is He who is in me than he who is in the world.',
			masculine:
				'{name} possess the Great One in himself because greater is He who is in me than he who is in the world.',
			feminine:
				'{name} possess the Great One in herself because greater is He who is in me than he who is in the world.',
			verse: '<a href="https://www.bible.com/bible/59/1JN.4.4" target="_blank">1 John 4:4</a>'
		},
		47: {
			title: 'I press toward the mark for the prize of the high calling of God.',
			masculine: '{name} presses toward the mark for the prize of the high calling of God.',
			feminine: '{name} presses toward the mark for the prize of the high calling of God.',
			verse:
				'<a href="https://www.bible.com/bible/59/PHP.3.14" target="_blank">Philippians 3:14</a>'
		},
		48: {
			title: 'I always triumph in Christ.',
			masculine: '{name} always triumphs in Christ.',
			feminine: '{name} always triumphs in Christ.',
			verse:
				'<a href="https://www.bible.com/bible/59/2CO.2.14" target="_blank">2 Corinthians 2:14</a>'
		},
		49: {
			title: 'My life shows forth his praise.',
			masculine: "{name}'s life shows forth his praise.",
			feminine: "{name}'s life shows forth his praise.",
			verse: '<a href="https://www.bible.com/bible/59/1PE.2.9" target="_blank">1 Peter 2:9</a>'
		},
		50: {
			title: 'My life is hidden with Christ in God.',
			masculine: "{name}'s life is hidden with Christ in God.",
			feminine: "{name}'s life is hidden with Christ in God.",
			verse: '<a href="https://www.bible.com/bible/59/COL.3.3" target="_blank">Colossians 3:3</a>'
		}
	};

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
	}

	function handleClickPrev() {
		page--;
	}

	function handleClickHome() {
		page = 0;
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
							class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
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
							<a
								href="https://www.thepaulcushing.com/about/"
								class="px-4 text-gray-500 hover:text-white">Contact</a
							>
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
							class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Previous
						</button>
						{#if page < 50}
							<button
								on:click={handleClickNext}
								class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
								data-rounded="rounded-lg"
								data-primary="gray-900"
							>
								Next
							</button>
						{:else}
							<button
								on:click={handleClickHome}
								class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
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
