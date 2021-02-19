<template>
	<footer>
		<!-- Place this tag where you want the button to render. -->
		<github-button
			href="https://github.com/burakgur"
			:data-color-scheme="getGithubButtonTheme"
			data-size="large"
			aria-label="Follow @burakgur on GitHub"
		>Takip Et @burakgur</github-button>
		<a
			@click="changeTheme()"
			id="theme-button"
		>
			<font-awesome-icon
				:icon="['far', iconName]"
				size="lg"
			/>
		</a>
	</footer>
</template>

<script>
	import GithubButton from 'vue-github-button';
	export default {
		name: 'Bottom',
		data () {
			return {
				iconName: this.$store.getters.getTheme === 'light' ? 'moon' : 'sun',
				rotateValue: "0deg"
			}
		},
		computed: {
			getGithubButtonTheme () {
				const githubButtonTheme = this.$store.getters.getTheme === 'light' ? 'dark' : 'light';
				return githubButtonTheme;
			}
		},
		methods: {
			changeTheme () {
				this.rotateValue = this.rotateValue === "360deg" ? "0deg" : "360deg"
				document.getElementById("theme-button").style.transform = "rotate(" + this.rotateValue + ")"
				this.iconName = this.$store.getters.getTheme === 'light' ? 'sun' : 'moon'
				this.$store.dispatch('changeTheme')
			}
		},
		components: {
			GithubButton
		},
		mounted () {
			console.log(this.getGithubButtonColor);
		}
	}
</script>