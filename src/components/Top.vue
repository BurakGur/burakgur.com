<template>
	<header>
		<router-link
			class="semi"
			to="/"
		>burak gür.</router-link>
		<div class="social">
			<a
				href="https://medium.com/burakgur"
				target="_blank"
			>
				<font-awesome-icon
					:icon="['fab', 'medium-m']"
					size="lg"
				/>
			</a>
			<a
				href="https://twitter.com/brkgur"
				target="_blank"
			>
				<font-awesome-icon
					:icon="['fab', 'twitter']"
					size="lg"
				/>
			</a>
			<a
				href="https://github.com/burakgur"
				target="_blank"
			>
				<font-awesome-icon
					:icon="['fab', 'github']"
					size="lg"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/burakgur"
				target="_blank"
			>
				<font-awesome-icon
					:icon="['fab', 'linkedin']"
					size="lg"
				/>
			</a>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Top'
	}
</script>
