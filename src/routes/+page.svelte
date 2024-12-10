<script>
	import og_image from '$images/og_image.png';
	import yellow_dots from '$images/backgrounds/yellow-dots.svg';
	import favicon from '$images/favicon.svg';
	import hero from '$images/hero.jpg';
	import svelte_barcelona from '$images/svelte-barcelona.png';
	import icon_bluesky from '$images/icons/bluesky.svg';
	import speaker_rich from '$images/past-speakers/rich.png';
	import speaker_scott from '$images/past-speakers/scott.png';
	import speaker_swyx from '$images/past-speakers/swyx.png';
	import speaker_samuel from '$images/past-speakers/samuel.png';
	import speaker_andreas from '$images/past-speakers/andreas.png';
	import speaker_paolo from '$images/past-speakers/paolo.png';
	import slider_1 from '$images/slider/1.jpg';
	import slider_2 from '$images/slider/2.jpg';
	import slider_3 from '$images/slider/3.jpg';
	import slider_4 from '$images/slider/4.jpg';
	import venue from '$images/venue.jpg';
	import svelte_society_logo from '$images/svelte-society-logo.svg';
	import mainmatter_logo from '$images/maimatter.svg';
	import Speaker from '$lib/components/Speaker.svelte';
	import Link from '$lib/components/Link.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
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
	<section id="hero" class="pt-5">
		<div class="row-reverse">
			<div class="column pt-2" id="hero-image">
				<p>The 10th Svelte-only conference</p>
				<img
					id="main-image"
					src={hero}
					class="responsive"
					alt="previous Svelte summit, with audience members listening to a talk"
				/>
				<img src={yellow_dots} alt="" />
			</div>
			<div class="column center" id="conference-info">
				<div>
					<div class="pb-1">
						<div class="inline-flex pb-1">
							<h2 class="white">Svelte Summit</h2>
							<img
								id="two-dots"
								src={svelte_barcelona}
								alt="a dot with the svelte logo and a dot with the sagrada familia"
							/>
						</div>
						<h1 class="lt-yellow">Spring 2025</h1>
					</div>
					<div class="row pb-1">
						<div class="column pb-2">
							<div class="inline-flex">
								<i class="bi bi-calendar-fill orange-1"></i>
								<h3 class="white no-caps">May 8 &amp; 9, 2025</h3>
							</div>
						</div>
						<div class="column">
							<div class="inline-flex items-start">
								<i class="bi bi-geo-alt-fill orange-1 larger"></i>
								<h3 class="white no-caps">Barcelona &amp; online</h3>
							</div>
						</div>
					</div>
					<p class="white pb-3">Svelte Summit is an event dedicated to Svelte and everything that is happening in the community. Don't miss it! It's going to be an absolute&nbsp;blast.</p>
					<button class="mr-1 mb-1"><h3 class="lt-yellow">Buy Tickets</h3></button>
					<button class="secondary"><h3 class="lt-yellow">Submit a talk</h3></button>
				</div>
			</div>
		</div>
	</section>
	<section id="invited-speaker">
		<div class="lg-row vertical-center">
			<h2 class="orange-2 column">Invited speaker</h2>
			<Speaker
				img={speaker_rich}
				name="Rich Harris"
				description="Creator of Svelte"
				variant="invited"
				url="https://github.com/Rich-Harris"
			/>
		</div>
	</section>
	<section id="past-speakers">
		<div class="lg-row container mx-auto">
			<h2 class="lt-yellow column">Past speakers</h2>
			<div class="column gap-10">
				<Speaker
					img={speaker_scott}
					name="Scott Tolinski"
					description="Creator of Level Up Tutorials, Co-host of Syntax.fm"
					variant="past"
					url="https://github.com/stolinski"
				/>
				<Speaker
					img={speaker_swyx}
					name="Swyx"
					description="Writer and Cohost of the Latent Space AI newsletter/podcast"
					variant="past"
					url="https://github.com/swyxio"
				/>
				<Speaker
					img={speaker_samuel}
					name="Samuel Stroschein"
					description="Creator of Inlang"
					variant="past"
					url="https://github.com/samuelstroschein"
				/>
				<Speaker
					img={speaker_andreas}
					name="Andreas Söderlund"
					description="Creator of sveltekit-superforms"
					variant="past"
					url="https://github.com/ciscoheat"
				/>
				<Speaker
					img={speaker_paolo}
					name="Paolo Ricciuti"
					description="SSE at @mainmatter"
					variant="past"
					url="https://github.com/paoloricciuti"
				/>
			</div>
		</div>
	</section>
	<section id="social-media" class="orange-1">
		<div class="container justify-center mx-auto">
			<div class="link">
				<div class="inline-flex">
					<i class="bi bi-envelope-open-fill orange-1 mr-half"></i>
					<Link
						bg="var(--orange)"
						fg="var(--yellow)"
						href="https://marketing.sveltesociety.dev/forms/nfrm_weLJnLY5"
						target="_blank"><h3 class="no-caps">Sign up to our newsletter</h3></Link
					>
				</div>
			</div>
			<div class="link">
				<div class="inline-flex">
					<i class="bi bi-discord orange-1 mr-half"></i>
					<Link
						bg="var(--orange)"
						fg="var(--yellow)"
						href="https://discord.com/invite/svelte"
						target="_blank"><h3 class="no-caps">Discord</h3></Link
					>
				</div>
			</div>
			<div class="link">
				<div class="inline-flex">
					<i class="bi bi-twitter-x orange-1 mr-half"></i>
					<Link
						bg="var(--orange)"
						fg="var(--yellow)"
						href="https://x.com/sveltesociety"
						target="_blank"><h3 class="no-caps">Twitter</h3></Link
					>
				</div>
			</div>
			<div class="link">
				<div class="inline-flex">
					<img class="orange-1 mr-half" src={icon_bluesky} alt="bluesky logo" />
					<Link
						bg="var(--orange)"
						fg="var(--yellow)"
						href="https://bsky.app/profile/sveltesociety.dev"
						target="_blank"><h3 class="no-caps">Bluesky</h3></Link
					>
				</div>
			</div>
		</div>
	</section>
	<section id="venue">
		<div class="container row-reverse vertical-center mx-auto">
			<div class="column text">
				<h2 class="lt-yellow pb-2">Summit venue</h2>
				<p class="white pb-2">
					The spring 2025 Svelte Summit will take place in the charming and light-filled event space
					of Casa Ruis, Carrer d'Enric Granados, 97, L'Eixample, 08008 Barcelona, Spain. The
					location is fully wheelchair-accessible.
				</p>
				<div class="link">
					<div class="inline-flex">
						<i class="bi bi-geo-alt-fill white mr-half"></i>
						<Link
							bg="var(--orange)"
							fg="var(--white)"
							href="https://maps.app.goo.gl/S5dG2EJdQkWa5bqN9"
							target="_blank"><h3 class="no-caps">See location on Google Maps</h3></Link
						>
					</div>
				</div>
			</div>
			<div class="column photo">
				<img src={venue} class="responsive" alt="our venue" />
			</div>
		</div>
	</section>
	<section id="community">
		<div class="container row-reverse vertical-center mx-auto">
			<div class="column text">
				<h2 class="lt-yellow pb-2">Meet the Svelte community</h2>
				<p class="white">
					Others enjoy working with Svelte as much as you do. Meet peers, make lasting friendships,
					and find out about new career opportunities at the Svelte Summit.
				</p>
			</div>
			<div class="column photo">
				<Carousel
					width="100%"
					height="100%"
					imgs={[
						{
							src: slider_1,
							alt: 'Post-conference dinner'
						},
						{
							src: slider_2,
							alt: 'Lunch during the conference'
						},
						{
							src: slider_3,
							alt: 'Bar outing'
						},
						{
							src: slider_4,
							alt: 'Group photo of the attendees'
						}
					]}
				/>
			</div>
		</div>
	</section>
	<section id="buy-tickets">
		<button class="mr-1 mb-1"><h3 class="lt-yellow">Buy Tickets</h3></button>
		<button class="secondary"><h3 class="lt-yellow">Submit a talk</h3></button>
	</section>
	<section id="organizers">
		<div class="lg-row vertical-center container">
			<h2 class="white column">Organizers</h2>
			<div class="column container">
				<div class="ml-2 image-link">
					<Link bg="none" fg="none" href="https://www.sveltesociety.dev/" target="_blank"
						><img
							class="responsive"
							id="svelte-society"
							src={svelte_society_logo}
							alt="svelte society logo"
						/></Link
					>
				</div>
				<div class="ml-2 image-link">
					<Link bg="none" fg="none" href="https://www.mainmatter.com/" target="_blank"
						><img
							class="responsive"
							src={mainmatter_logo}
							id="mainmatter"
							alt="mainmatter logo"
						/></Link
					>
				</div>
			</div>
		</div>
	</section>
	<section id="links">
		<div class="container justify-center mx-auto">
			<div class="link">
				<div class="inline-flex">
					<i class="bi bi-question-lg orange-3 mr-half"></i>
					<Link bg="var(--orange)" fg="var(--black)" href="/faq" target="_self"
						><h3 class="no-caps">Frequently asked questions</h3></Link
					>
				</div>
			</div>
			<div class="link">
				<div class="inline-flex">
					<i class="bi bi-chat-heart-fill orange-3 mr-half"></i>
					<Link bg="var(--orange)" fg="var(--black)" href="/sponsors" target="_self"
						><h3 class="no-caps">Become a sponsor</h3></Link
					>
				</div>
			</div>
			<div class="link">
				<div class="inline-flex">
					<i class="bi bi-megaphone-fill orange-3 mr-half"></i>
					<Link bg="var(--orange)" fg="var(--black)" href="" target="_blank"
						><h3 class="no-caps">Submit a talk</h3></Link
					>
				</div>
			</div>
		</div>
	</section>
</div>
