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
		<h3 class="lt-yellow" id="what-is-the-svelte-summit">
			<a href="#what-is-the-svelte-summit">What is the Svelte Summit?</a>
		</h3>
		<p class="white pb-3">
			Svelte Summit is an event dedicated to Svelte and everything that is happening in the
			community. Don't miss it! It's going to be an absolute blast.
		</p>
		<!--
		<h3 class="lt-yellow">How do I watch it?</h3>
		<p class="white pb-3">
			Once the day arrives, tune in to the Svelte Society YouTube channel and start watching. We'll
			also make sure to post a notice at the top of this page if you forget where to go.
		</p>
		-->
		<h3 class="lt-yellow" id="when-is-it">
			<a href="#when-is-it">When is it?</a>
		</h3>
		<p class="white pb-3">
			May 8th and 9th, 2025. The summit will last for about 5-6 hours each day (including breaks).
			It starts at 3PM CET
		</p>
		<h3 class="lt-yellow" id="i-want-to-sponsor-the-event">
			<a href="#i-want-to-sponsor-the-event">I want to sponsor the event! How do I do that?</a>
		</h3>
		<p class="white pb-3">
			The easiest way is to fire off an email to <a href="mailto:sponsors@sveltesummit.com"
				>sponsors@sveltesummit.com</a
			> and tell us what you have in mind.
		</p>
		<h3 class="lt-yellow" id="is-there-a-schedule">
			<a href="#is-there-a-schedule">Is there a schedule?</a>
		</h3>
		<p class="white pb-3">
			Not yet. As we get closer to the day of the conference we will release a schedule.
		</p>
		<h3 class="lt-yellow" id="where-can-i-buy-tickets">
			<a href="#where-can-i-buy-tickets">Where can I buy tickets?</a>
		</h3>
		<p class="white pb-3">
			You can buy tickets <a
				href="https://www.tickettailor.com/events/sveltesummit/1485857"
				target="_blank">here</a
			>. Until December 31st, 2024 you can get an extra 20% off by using the code
			<strong>sveltmas2024</strong> at checkout.
		</p>
		<h3 class="lt-yellow" id="do-you-offer-group-tickets">
			<a href="#do-you-offer-group-tickets">Do you offer group tickets?</a>
		</h3>
		<p class="white pb-3">
			Yes, send us an email to <a href="mailto:groups@sveltesociety.dev">groups@sveltesociety.dev</a
			>
		</p>
		<h3 class="lt-yellow" id="can-i-pay-by-invoice">
			<a href="#can-i-pay-by-invoice">Can I pay by invoice?</a>
		</h3>
		<p class="white pb-3">
			Yes, send us an email to <a href="mailto:groups@sveltesociety.dev">groups@sveltesociety.dev</a
			>
		</p>
		<h3 class="lt-yellow" id="how-can-i-become-a-speaker">
			<a href="#how-can-i-become-a-speaker"> How can I become a speaker? </a>
		</h3>
		<p class="white pb-3">
			You can apply to be a speaker until January 13 <a href="/2025/spring/submit">here</a>. The
			selected speakers will be informed per email in the following days after the deadline.
		</p>
		<h3 class="lt-yellow">How do you support speakers?</h3>
		<p class="white pb-3">
			Speakers will get a free ticket and flights and accommodation paid for.
		</p>
		<h3 class="lt-yellow" id="i-have-another-question-or-feedback">
			<a href="#i-have-another-question-or-feedback">
				I have another question or feedback. Where can I ask?
			</a>
		</h3>
		<p class="white pb-3">
			You can join the <strong>#svelte-summit</strong> channel on
			<a href="https://svelte.dev/chat" target="_blank">our Discord server</a>
			or send an email to <a href="mailto:karim@sveltesociety.dev">karim@sveltesociety.dev</a>.
		</p>
	</section>
	<Footer></Footer>
</div>
