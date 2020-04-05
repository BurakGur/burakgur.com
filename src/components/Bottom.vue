<template>
  <footer>
    <a @click="changeTheme()" id="theme-button">
      <font-awesome-icon :icon="['far', iconName]" size="lg" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Bottom',
  data() {
    return {
      iconName: this.$store.getters.getTheme === 'light' ? 'moon' : 'sun',
      rotateValue: "0deg"
    }
  },
  methods: {
    changeTheme() {
      this.rotateValue = this.rotateValue === "360deg" ? "0deg" : "360deg"
      document.getElementById("theme-button").style.transform = "rotate(" + this.rotateValue +")"
      this.iconName = this.$store.getters.getTheme === 'light' ? 'sun' : 'moon'
      this.$store.dispatch('changeTheme')
    }
  },
}
</script>