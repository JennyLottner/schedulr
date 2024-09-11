<template>
  <section>
    <LoginHeader />
    <main class="flex column center">
      <h1>Log in to your account</h1>
      <p>Enter your work email address</p>
      <input type="email">
      <button>Next</button>
      <p>Or Sign in with</p>
      <button>Google</button>
      <p>Don't have an account yet? <RouterLink to="/signup">Sign up</RouterLink></p>
      <p>Can't log in? <RouterLink to="/help-center">Visit our help center</RouterLink></p>
    </main>
  </section>
</template>

<script>
import LoginHeader from '@/cmps/LoginHeader.vue';
export default {
  components: { LoginHeader }
}
</script>

<style lang="scss">
</style>