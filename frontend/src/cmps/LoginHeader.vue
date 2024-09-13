<template>
  <header>
    <img class="schedulr-logo" src="../assets/logo.png" alt="Schedulr logo"/>
  </header>
</template>
    
<script>
  export default {
}
</script>
    
<style scoped lang="scss">
  header {
    background-color: #f7f7f7;
    height: 65px;
    display: flex;
    padding-inline-start: 20px;
    border-bottom: 1px solid #e0e0e0;
  
    img {
      justify-self: self-start;
      align-self: center;
      width: 180px;
      height: 44px;
    }
  }
</style>