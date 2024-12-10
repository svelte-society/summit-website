<script lang="ts">
		import Link from '$lib/components/Link.svelte';
</script>

<section id="footer" class="text-center">
	<div class="wrapper vertical-top container">
		<div class="column">
			<Link 
				class="mb-1"
				bg="var(--black)"
				fg="var(--orange)"
				href=""
				target="_blank"><h4 class="no-caps">Svelte Summit AB</h4></Link
			>
			<Link
				bg="var(--black)"
				fg="var(--orange)"
				href=""
				target="_blank"><h4 class="no-caps">Privacy policy</h4></Link
			>
		</div>
		<ul class="column">
			<li>
				<h4 class="no-caps orange-1 pb-2 text-decor-none">Previous summits:</h4>
			</li>
			<li>
				<Link
				bg="var(--black)"
				fg="var(--orange)"
				href="https://www.sveltesummit.com/2024/fall"
				target="_blank"><h4 class="no-caps">Fall 2024</h4></Link
				>
			</li>
			<li>
				<Link
				bg="var(--black)"
				fg="var(--orange)"
				href="https://www.sveltesummit.com/2024/spring"
				target="_blank"><h4 class="no-caps">Spring 2024</h4></Link
			>
			</li>
			<li>
				<Link
				bg="var(--black)"
				fg="var(--orange)"
				href="https://www.sveltesummit.com/2023/fall"
				target="_blank"><h4 class="no-caps">Fall 2023</h4></Link
				>
			</li>
			<li>
				<Link
				bg="var(--black)"
				fg="var(--orange)"
				href="https://www.sveltesummit.com/2023/spring"
				target="_blank"><h4 class="no-caps">Spring 2023</h4></Link
				>
			</li>
		</ul>
	</div>
</section>

<style>
	#footer {
		background: var(--black);
		display:block;
		padding:5rem 25rem;
	}

	@media (max-width:999px) {
		#footer {
			padding:3rem;
		}
	}

	#footer .wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	#footer h4 {
		text-decoration:underline var(--orange);
	}

	.text-decor-none {
		text-decoration:none !important;
	}

	#footer ul {
		list-style-type: none;
  		margin: 0;
  		padding: 0;
	}

</style>
