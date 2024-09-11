<template>
  <section>
    <LoginHeader />
    <main class="flex column center">
      <h1><b>Log</b> in</h1>
      <label for="email">Email</label>
      <input type="email" id="password" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <button class="forgot-password">Forgot your password?</button>
      <button>
        Log in
        <span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
            aria-hidden="true"
            class="icon_d6a7187c13 rightIcon_22e312003f noFocusStyle_48049c26c1"
            data-testid="icon"
          >
            <path
              d="M2.24999 10.071C2.24999 9.65683 2.58578 9.32104 2.99999 9.32104L15.3315 9.32105L10.7031 4.69273C10.4103 4.39983 10.4103 3.92496 10.7031 3.63207C10.996 3.33917 11.4709 3.33917 11.7638 3.63207L17.6725 9.54071C17.9653 9.83361 17.9653 10.3085 17.6725 10.6014L11.7638 16.51C11.4709 16.8029 10.996 16.8029 10.7031 16.51C10.4103 16.2171 10.4103 15.7423 10.7031 15.4494L15.3315 10.821L2.99999 10.821C2.58578 10.821 2.24999 10.4853 2.24999 10.071Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      <p>Or Sign in with</p>
      <button>Google</button>
      <p>
        Don't have an account yet? <RouterLink to="/signup">Sign up</RouterLink>
      </p>
      <p>
        Can't log in?
        <RouterLink to="/help-center">Visit our help center</RouterLink>
      </p>
    </main>
  </section>
</template>

<script>
import LoginHeader from "@/cmps/LoginHeader.vue"
export default {
  components: { LoginHeader },
};
</script>

<style lang="scss">
</style>