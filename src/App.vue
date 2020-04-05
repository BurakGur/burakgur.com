<template>
  <div id="app">
    <div :class=themeName>
      <div class="main">
        <top></top>
        <router-view/>
        <bottom></bottom>
      </div>
    </div>
  </div>
</template>

<script>
import Top from './components/Top'
import Bottom from './components/Bottom'

export default {
  name: 'App',
  data() {
    return {
      themeName: this.$store.getters.getTheme   
    }
  },
  created() {
    this.$store.watch(
      (state, getters) => getters.getTheme,
      (newValue, oldValue) => {
        this.themeName = newValue
      },
    )
  },
  components: { Top, Bottom }
}
</script>

<style lang="sass">
  @import './assets/css/helper/normalize.css'
  @import './assets/css/helper/formalize'
  @import './assets/css/main.sass'
</style>