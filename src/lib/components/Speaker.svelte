<script lang="ts">
	import github from '$images/icons/github.svg';

	type Props = {
		img: string;
		name: string;
		description: string;
		variant: 'invited' | 'past';
	};
	let { img, name, description, variant }: Props = $props();
</script>

<div class="inline-flex column">
	<img src={img} alt={name} class="img-speaker" />
	<div class="speaker-info">
		<h3 class:orange-2={variant === 'invited'} class:lt-yellow={variant === 'past'}>{name}</h3>
		<h4 class="black mb-half">{description}</h4>
		<img class="github" src={github} alt="github logo" />
	</div>
</div>

<style>
	.github {
		width: 1.5rem;
	}

	.speaker-info {
		padding-left: 2rem;
	}

	@media (max-width: 999px) {
		.speaker-info {
			padding-left: 1rem;
		}
	}
</style>
