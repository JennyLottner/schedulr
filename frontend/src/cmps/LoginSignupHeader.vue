<template>
    <header>
      <img class="schedulr-logo" src="../assets/pics/schedulr-logo.png" alt="Schedulr logo"/>
      <h1>schedulr</h1>
    </header>
</template>
    
<script>
  export default {}
</script>
    
<style scoped lang="scss">
@import "../style//setup/vars";

header {
    height: 3.5rem;
    color: $font-color;
    background-color: #f7f7f7;
    padding-inline-start: 1.25rem;
    border-bottom: 1px solid $app-gray;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-size: 2rem;
      font-weight: 800;
    }

    img {
      height: 2rem;
    }
  }
</style>