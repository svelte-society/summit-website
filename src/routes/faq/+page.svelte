<script>
	import og_image from '$images/og_image.png';
	import logo_header from '$images/logo-header.png';
	import favicon from '$images/favicon.svg';
	import Link from '$lib/components/Link.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Svelte Summit Spring 2025: Barcelona and online</title>
	<link rel="icon" type="image/x-icon" href={favicon} />
	<meta property="og:title" content="Svelte Summit Spring 2025: Barcelona & online" />
	<meta property="og:description" content="The world's largest Svelte conference" />
	<meta property="og:image" content={og_image} />
</svelte:head>

<div class="css-2025">
	<section id="page-header">
		<Link bg="none" fg="none" href="../"
			><h3 class="no-caps">
				<img
					id="logo"
					src={logo_header}
					class="responsive pt-2 pl-2"
					alt="previous Svelte summit, with audience members listening to a talk"
				/>
			</h3></Link
		>
	</section>

	<section id="faq" class="pt-5 mx-auto">
		<h2 class="white pb-3">Frequently Asked Questions (FAQ)</h2>
		<h3 class="lt-yellow">What is the Svelte Summit?</h3>
		<p class="lt-yellow pb-3">
			Svelte Summit is an event dedicated to Svelte and everything that is happening in the
			community. Don't miss it! It's going to be an absolute blast.
		</p>
		<h3 class="lt-yellow">How do I watch it?</h3>
		<p class="lt-yellow pb-3">
			Once the day arrives, tune in to the Svelte Society YouTube channel and start watching. We'll
			also make sure to post a notice at the top of this page if you forget where to go.
		</p>
		<h3 class="lt-yellow">I want to sponsor the event! How do I do that?</h3>
		<p class="lt-yellow pb-3">
			The easiest way is to fire off an email to sponsors@sveltesummit.com and tell us what you have
			in mind.
		</p>
		<h3 class="lt-yellow">When is it?</h3>
		<p class="lt-yellow pb-3">
			May 8th and 9th, 2025. The summit will last for about 5-6 hours each day (including breaks).
			It starts at 3PM CET
		</p>
		<h3 class="lt-yellow">Is there a schedule?</h3>
		<p class="lt-yellow pb-3">
			Not yet. As we get closer to the day of the conference we will release a schedule.
		</p>
	</section>
	<Footer></Footer>
</div>
