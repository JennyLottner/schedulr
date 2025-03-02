<script>
import { RouterView } from 'vue-router'

export default {
  mounted() {
    console.log(
      '%cWelcome to %cSchedulr%c! \n\n%cLooking for great web developers? \nContact us! \n\n%cJenny Tover: \n%chttps://www.linkedin.com/in/jenny-lottner-tover-7b1357261 \n\n%cShoval Sabag: \n%chttps://www.linkedin.com/in/shoval-sabag-2b2305308\n',
      'color: #358fef; font-size: 16px; font-weight: bold;',  // Title style
      'background: linear-gradient(to right, #df2f4a, #fdab3d, #00c875); color: transparent; -webkit-background-clip: text; font-size: 16px; font-weight: bold;',  // Schedulr style
      'color: #358fef; font-size: 16px; font-weight: bold;',  // Title style
      'color: #59a1ee; font-size: 13px; ', // Subtitle style
      'color: #b0d8fd; font-size: 14px; font-weight: bold;',  // Name style
      'font-size: 12px; font-weight: normal;', // Link style
      'color: #b0d8fd; font-size: 14px; font-weight: bold;', // Name style
      'font-size: 12px; font-weight: normal;' // Link style
    )
  }
}
</script>

<template>
    <RouterView />
</template>

<style lang="scss">
</style>
