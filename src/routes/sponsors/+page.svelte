<script>
	import og_image from '$images/og_image.png';
    import logo_header from '$images/logo-header.png'
	import favicon from '$images/favicon.svg';
	import sponsorhip_diamond from '$images/sponsorship/diamond.png';
	import sponsorhip_gold from '$images/sponsorship/gold.png';
	import sponsorhip_podcast from '$images/sponsorship/podcast.png';
	import sponsorhip_dinner from '$images/sponsorship/dinner.png';
	import sponsorhip_coffee from '$images/sponsorship/coffee.png';
	import sponsorhip_lanyard from '$images/sponsorship/lanyards.png';
	import sponsorhip_other from '$images/sponsorship/other.png';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Svelte Summit Spring 2025: Barcelona and online</title>
	<link rel="icon" type="image/x-icon" href={favicon} />
	<meta property="og:title" content="Svelte Summit Spring 2025: Barcelona & online" />
	<meta property="og:description" content="The world's largest Svelte conference" />
	<meta property="og:image" content={og_image} />
</svelte:head>

<section id="page-header">
    <Link
		bg=none
		fg=none
		href="../"><h3 class="no-caps"
	>
		<img
		id="logo"
		src={logo_header}
		class="responsive pt-2 pl-2"
		alt="previous Svelte summit, with audience members listening to a talk"
	    />
    </Link> 
</section>

<section id="sponsors" class="pt-5 mx-auto">
    <h2 class="lt-yellow pb-3 text-center">SPONSORSHIP OPPORTUNITIES</h2>
    <p class="lt-yellow pb-1">We held the first Svelte conference on April 26, 2019. It gathered over 1000 highly enthusiastic developers from across the globe. Since then, we've hosted and organised nine more events. Each time, the number of attendees dramatically increases. In contrast to most other events we take pride in keeping it joyfli and fun, much like how people feel when they decide to use Svelte.</p>
	<p class="lt-yellow pb-3">Below you'll find some stats on earlier events as well as our social media accounts.</p>
	<div id="social-media-stats" class="pb-3">
		<div class="stats-cell stats-1">
			<h2>2.5k</h2>
			<h4>live attendees</h4>
		</div>
		<div class="stats-cell stats-2">
			<h2>21k</h2>
			<h4>async attendees</h4>
		</div>
		<div class="stats-cell stats-3">
			<h2>50+</h2>
			<h4>countries reached</h4>
		</div>
		<div class="stats-cell stats-4">
			<h2>15+</h2>
			<h4>talks from around the world</h4>
		</div>
		<div class="stats-cell stats-5">
			<h2>22.9k</h2>
			<h4>twitter followers</h4>
		</div>
		<div class="stats-cell stats-6">
			<h2>1.6M</h2>
			<h4>YouTube views</h4>
		</div>
		<div class="stats-cell stats-7">
			<h2>23.9k</h2>
			<h4>YouTube subscribers</h4>
		</div>
	</div>
	<div class="text-center">
		<div class="button">
			<h3 class="lt-yellow">Become a sponsor</h3>
		</div>
	</div>

	<h2 class="pb-3 pt-7 white text-center">Why Sponsor?</h2>
    <p class="pb-1 white">Svelte is growing like crazy. Numbers are up manyfold on the Community discord, Reddit as well as on a number of other platforms. Developers love Svelte. So much so that they quit their jobs if they find a new one where they can use it. As you can see in the screenshots below, Svelte topped the charts for most exciting and most loved framework in a couple of surveys this year.</p>
	<p class="pb-3 white">With your help we can make Svelte Summit even better.</p>

	<h2 class="pb-3 pt-7 lt-yellow text-center">Sponsorship Packages</h2>
	<div id="sponsor-diamond" class="sponsor-package pt-5 pb-3">
		<img src={sponsorhip_diamond} alt="Diamond icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Diamond</h2>
		<h3 class="text-center pb-5">€8.000</h3>
		<p>This is the package for companies that really want to show their love for Svelte and the Svelte community. You'll get the largest size logo on the website and an above the fold logo in our email blasts. If you have any other interesting ideas we can discuss those as well.</p>
		<ul>
			<li>Large logo on the event website before, during and after the event</li>
			<li>Large (~3x size of Gold table) table with 2 roll-ups where you can present your company in the lounge area during the event</li>
			<li>One slide in-between talks shown during the intermissions and breaks</li>
			<li>Above the fold (on desktop) logo in all our email blasts</li>
			<li>Announcement of sponsorship in email and on Twitter</li>
			<li>5 tickets to the event itself</li>
			<li>Large logo at the start of the videos when they are uploaded to the YouTube channel after the&nbsp;event</li>
			<li>1 speaker dinner spot</li>
		</ul>
	</div>
	<div id="sponsor-gold" class="sponsor-package pt-5 pb-3 mt-5 text-center">
		<img src={sponsorhip_gold} alt="Gold bars icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Gold</h2>
		<h3 class="pb-5 text-center">€5.000</h3>
		<p>You like Svelte a lot. And you want there to be more conferences. This is the package for you. You'll also be eternalised in the separate videos that will be uploaded after the event on our YouTube channel.</p>
		<ul>
			<li>Logo on the event website before, during and after the event</li>
			<li>Table with in 1 roll-up where you can present your company in the lounge area during the event</li>
			<li>Logo at the start of the videos when they are uploaded to the YouTube channel after the event</li>
			<li>Announcement of sponsorship in email and on Twitter</li>
			<li>2 tickets to the event itself</li>
		</ul>
	</div>
	<div id="sponsor-podcast" class="sponsor-package pt-5 pb-3 mt-5 text-center">
		<img src={sponsorhip_podcast} alt="Podcast icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Podcast & Twitter</h2>
		<h3 class="pb-5 text-center">€15.000</h3>
		<p>You think the Svelte community is awesome and want to make sure it thrives. This is a package that is designed to give you an opportunity to repeatedly keep the name of your company in the minds of our audience.</p>
		<ul>
			<li>A 30 second pre-roll and mid-roll ad in the <a href="https://www.svelteradio.com/" target="_blank" class="underline">Svelte Radio Podcast</a> for 20 episodes (roughly 1 per week for 5 months)</li>
			<li>Your logo in the corner of our Twitter banner as well as a link in our profile bio</li>
			<li>Your logo in the corner of our YouTube banner</li>
			<li>Link in pinned Tweets during the period</li>
			<li>Announcement of sponsorship in our email newsletter and our Twitter account</li>
			<li>2 tickets to the event</li>
		</ul>
	</div>
	<div id="sponsor-dinner" class="sponsor-package pt-5 pb-3 mt-5 text-center">
		<img src={sponsorhip_dinner} alt="Salad icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Dinner & Lunch</h2>
		<h3 class="pb-5 text-center">€8.000</h3>
		<p>You like food. And Svelte! This is your chance to get the venue branded with your company during the lunches and dinners. </p>
		<ul>
			<li>We decorate the venue with roll-ups of your company</li>
			<li>Announcement of sponsorship from the MC/organizer before lunch and dinner</li>
			<li>You will be visible at the dinner party event</li>
		</ul>
	</div>
	<div id="sponsor-coffee" class="sponsor-package pt-5 pb-3 mt-5 text-center">
		<img src={sponsorhip_coffee} alt="Coffee icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Coffee Sponsor</h2>
		<h3 class="pb-5 text-center">€3.000</h3>
		<p>We all need coffee. It's the life essence of a developer.</p>
		<ul>
			<li>Logo on the coffee cups</li>
			<li>Roll-up by the coffee station&#40;s&#41;</li>
		</ul>
	</div>
	<div id="sponsor-lanyard" class="sponsor-package pt-5 pb-3 mt-5 text-center">
		<img src={sponsorhip_lanyard} alt="Lanyard icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Lanyard Sponsor</h2>
		<h3 class="pb-5 text-center">€3.000</h3>
		<p>The lanyard is something people often keep after an event. It's a fun way to get exposure.</p>
		<ul>
			<li>Your logo next to the Svelte Society/Summit logo on the lanyards</li>
		</ul>
	</div>
	<div id="sponsor-other" class="sponsor-package pt-5 pb-3 mt-5 text-center">
		<img src={sponsorhip_other} alt="Lightbulb icon" class="responsive mx-auto pb-2">
		<h2 class="text-center pl-2 pr-2">Other Ideas?</h2>
		<h3 class="pb-5 text-center">€TBD</h3>
		<p>Sometimes the packages we've designed don't fit the needs of you or your company. We're definitely open to modifying already existing ones or creating completely custom made packages just for you. Reach out to us and we'll figure something out!</p>
		<ul>
			<li>Make your own perks!</li>
		</ul>
	</div>

	<div class="text-center pt-7 pb-10">
		<div class="button">
			<h3 class="lt-yellow">Become a sponsor</h3>
		</div>
	</div>
</section>


