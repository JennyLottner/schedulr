<template>
  <header>
    <img class="account-logo" src="https://cdn.monday.com/images/logos/monday_logo_short.png" alt="Monday logo"/>
  </header>
</template>
    
<script>
  export default {
  // computed: {
  //   computedClass() {

  //   }
  // }
}
</script>
    
<style scoped lang="scss">
  header {
    background-color: #f7f7f7;
    // height: rem(65px);
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