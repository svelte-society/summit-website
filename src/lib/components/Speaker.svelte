<script lang="ts">
	import github from '$images/icons/github_mono.svg';
	import bluesky from '$images/icons/bluesky_mono.svg';

	type Props = {
		img: string;
		name: string;
		description: string;
		variant: 'invited' | 'past';
		github_url?: string;
		bluesky_url?: string;
	};
	let { img, name, description, variant, github_url, bluesky_url }: Props = $props();
</script>

<div class="inline-flex column">
	<img src={img} alt={name} class="img-speaker" />
	<div class="speaker-info">
		<h3 class:orange-2={variant === 'invited'} class:lt-yellow={variant === 'past'} class="pb-1">
			{name}
		</h3>
		<h4 class="black mb-half">{description}</h4>
		<div class="social-links">
			{#if github_url}
				<a href={github_url} target="_blank">
					<img class="github" src={github} alt="GitHub logo" />
				</a>
			{/if}
			{#if bluesky_url}
				<a href={bluesky_url} target="_blank">
					<img class="github" src={bluesky} alt="Bluesky logo" />
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.social-links {
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 2rem;
		}
	}

	.speaker-info {
		padding-left: 2rem;
	}

	.speaker-info a {
		display: block;
	}

	@media (max-width: 999px) {
		.speaker-info {
			padding-left: 1rem;
		}
	}
</style>
