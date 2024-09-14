<template>
  <section class="login-section">
    <LoginHeader />
    <main class="flex column">
      <div class="reg-login-wrapper flex column">
        <h1><span>Log</span> In</h1>
        <div
          v-for="prop in formProps"
          :key="prop.prop"
          class="prop-wrapper flex"
        >
          <label v-bind:for="prop.prop">{{ prop.prop }}</label>
          <input
            v-bind:type="prop.prop"
            v-bind:id="prop.prop"
            class="no-placeholder input"
          />
          <input
            v-bind:type="prop.prop"
            v-bind:id="prop.prop"
            class="with-placeholder input"
            v-bind:placeholder="prop.prop"
          />
        </div>
        <button class="forgot-password-btn">Forgot your password?</button>
        <button class="login-btn flex center">
          <span>Log in</span>
          <span class="svg-container">
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
      </div>
      <div class="sign-in-google flex">
        <span class="separator"></span>
        <p>Or Sign in with</p>
        <span class="separator"></span>
      </div>
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
import LoginHeader from "@/cmps/LoginHeader.vue";
export default {
  components: { LoginHeader },
  data() {
    return {
      formProps: [{ prop: "email" }, { prop: "password" }],
    };
  },
};
</script>

<style lang="scss">
.login-section {
  main {
    .reg-login-wrapper {
      align-self: center;
      padding: 40px;

      h1 {
        font-size: 40px;
        font-weight: 200;
        color: #333;
        text-align: center;

        span {
          font-weight: bold;
        }
      }

      .prop-wrapper {
        margin-block-end: 20px;
        align-self: self-start;

        label {
          margin-inline-end: 12px;
          color: #777;
          text-transform: capitalize;
          display: none;
        }

        input {
          padding: 6px 12px;
          width: 360px;
          height: 40px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 16px;
          color: #555;
          outline: none;
          justify-self: flex-start;

          &::placeholder {
            text-transform: capitalize;
            opacity: 0.5;
          }

          &:focus {
            border: 1px solid #66afe9;
          }
        }

        input.no-placeholder {
          display: none;
        }
      }

      .forgot-password-btn {
        background-color: transparent;
        color: #1f76c2;
        align-self: flex-start;
        font-size: 1em;
        margin-block-end: 12px;
      }

      .login-btn {
        background-color: #0073ea;
        color: #fff;
        height: 48px;
        border-radius: 5px;

        span {
          font-size: 18px;
        }

        .svg-container {
          margin-inline-start: 12px;
          margin-block-start: 5px;
        }
      }
    }
    
    .sign-in-google {
      
      .separator {
        width: 200px;
        border: .5px solid #c5c7d0;
      }
    }
  }
}
</style>