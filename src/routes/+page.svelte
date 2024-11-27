<script>
	import og_image from '$images/og_image.png';
	import yellow_dots from '$images/backgrounds/yellow-dots.svg';
	import favicon from '$images/favicon.svg';
	import hero from '$images/hero.jpg';
	import svelte_barcelona from '$images/svelte-barcelona.png';
	import speaker_rich from '$images/past-speakers/rich.png';
	import speaker_paolo from '$images/past-speakers/paolo.png';
	import speaker_jacob from '$images/past-speakers/jacob.png';
	import speaker_ben from '$images/past-speakers/ben.png';
	import venue from '$images/venue.jpg';
	import mainmatter_logo from '$images/maimatter.svg';
	import Speaker from '$lib/components/Speaker.svelte';
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

<section id="hero" class="pt-5">
	<div class="row-reverse">
		<div class="column" id="hero-image">
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
				<div class="pb-3">
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
				<div class="row pb-3">
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
				<button><h3 class="lt-yellow">Buy Tickets</h3></button>
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
	<div class="lg-row container">
		<h2 class="lt-yellow column">Past speakers</h2>
		<div class="column gap-10">
			<Speaker
				img={speaker_ben}
				name="Ben McCann"
				description="SvelteKit maintainer"
				variant="past"
				url="https://github.com/benmccann"
			/>
			<Speaker
				img={speaker_paolo}
				name="Paolo Ricciuti"
				description="SSE at @mainmatter"
				variant="past"
				url="https://github.com/paoloricciuti"
			/>
			<Speaker
				img={speaker_jacob}
				name="Jacob Bowdoin"
				description="Polylingual Development, i18n, JavaScript, Svelte, Linguistics"
				variant="past"
				url="https://github.com/jacob-8"
			/>
		</div>
	</div>
</section>
<section id="social-media" class="orange-1">
	<div class="container justify-center">
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
	</div>
</section>
<section id="venue">
	<div class="container row-reverse vertical-center">
		<div class="column text">
			<h2 class="white">Conference venue</h2>
			<p class="white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis lacus ac mi
				vestibulum, ac rhoncus erat lobortis. Pellentesque sed lorem eget tortor tincidunt
				pellentesque non id leo. Ut at odio eget felis pulvinar mattis commodo quis elit. Nunc sit
				amet efficitur diam. Donec vitae nunc porta, feugiat ex et, varius ipsum. Proin mattis nec
				sem vitae hendrerit. Morbi convallis erat sit amet lacus tincidunt consectetur ut sit amet
				nibh.
			</p>
		</div>
		<div class="column photo">
			<img src={venue} class="responsive" alt="our venue" />
		</div>
	</div>
</section>
<section id="community">
	<div class="container row-reverse vertical-center">
		<div class="column text">
			<h2 class="lt-yellow">Meet the Svelte community</h2>
			<p class="lt-yellow">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis lacus ac mi
				vestibulum, ac rhoncus erat lobortis. Pellentesque sed lorem eget tortor tincidunt
			</p>
		</div>
		<div class="column photo">
			<!-- <div class="slideshow-container">
					<div class="mySlides fade">
						<img src="./images/community-1.jpg" class="responsive">
				  	</div>
					<div class="mySlides fade">
						<img src="./images/venue.jpg" class="responsive">
					</div>
					<div class="mySlides fade">
						<img src="./images/venue.jpg" class="responsive">
					</div>
					<br>
					
					<div style="text-align:center">
						<span class="dot" onclick="currentSlide(1)"></span>
						<span class="dot" onclick="currentSlide(2)"></span>
						<span class="dot" onclick="currentSlide(3)"></span>
					</div>
				</div>
				<script>
					let slideIndex = 0;
					showSlides();

					function showSlides() {
					  let i;
					  let slides = document.getElementsByClassName("mySlides");
					  let dots = document.getElementsByClassName("dot");
					  for (i = 0; i < slides.length; i++) {
						slides[i].style.display = "none";  
					  }
					  slideIndex++;
					  if (slideIndex > slides.length) {slideIndex = 1}    
					  for (i = 0; i < dots.length; i++) {
						dots[i].className = dots[i].className.replace(" active", "");
					  }
					  slides[slideIndex-1].style.display = "block";  
					  dots[slideIndex-1].className += " active";
					  setTimeout(showSlides, 2000); // Change image every 2 seconds
					}
				</script>
			</div> 
		</div> -->
		</div>
	</div>
</section>
<section id="buy-tickets">
	<button><h3 class="lt-yellow">Buy Tickets</h3></button>
</section>
<section id="organizers">
	<div class="lg-row vertical-center">
		<h2 class="white column">Organizers</h2>
		<div class="column inline-flex">
			<Link
				fg="var(--white)"
				bg="var(--orange-3)"
				href="https://www.sveltesociety.dev/"
				target="_blank"><h3>Svelte&nbsp;Society</h3></Link
			>
			<img class="pl-2 responsive" src={mainmatter_logo} id="mainmatter" alt="mainmatter logo" />
		</div>
	</div>
</section>
<section id="links">
	<div class="container justify-center">
		<div class="link">
			<div class="inline-flex">
				<i class="bi bi-question-lg orange-3 mr-half"></i>
				<Link bg="var(--orange)" fg="var(--black)" href="https://www.wikipedia.org" target="_blank"
					><h3 class="no-caps">Frequently asked questions</h3></Link
				>
			</div>
		</div>
		<div class="link">
			<div class="inline-flex">
				<i class="bi bi-chat-heart-fill orange-3 mr-half"></i>
				<Link bg="var(--orange)" fg="var(--black)" href="https://www.wikipedia.org" target="_blank"
					><h3 class="no-caps">Become a sponsor</h3></Link
				>
			</div>
		</div>
		<div class="link">
			<div class="inline-flex">
				<i class="bi bi-megaphone-fill orange-3 mr-half"></i>
				<Link bg="var(--orange)" fg="var(--black)" href="https://www.wikipedia.org" target="_blank"
					><h3 class="no-caps">Submit a talk</h3></Link
				>
			</div>
		</div>
	</div>
</section>
