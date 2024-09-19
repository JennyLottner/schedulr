<template>
  <section class="login-section">
    <LoginHeader />
    <main class="flex column">
      <div class="reg-login-wrapper flex column align-center">
        <h1><span>Log</span> In</h1>
        <div
          v-for="prop in formProps"
          :key="prop.prop"
          class="prop-wrapper flex align-center"
        >
          <label v-bind:for="prop.prop" v-bind:class="prop.prop + 'label'">{{
            prop.prop
          }}</label>
          <input
            v-bind:type="prop.prop"
            v-bind:id="prop.prop"
            v-model="credentials[prop]"
            class="no-placeholder input"
          />
          <input
            v-bind:type="prop.prop"
            v-bind:id="prop.prop"
            v-model="credentials[prop]"
            class="with-placeholder input"
            v-bind:placeholder="prop.prop"
          />
        </div>
        <button class="forgot-password-btn">Forgot your password?</button>
        <button class="login-btn flex center" @click="onLoginBtn()">
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
      <div class="sign-in-google flex center">
        <span class="separator"></span>
        <p>Or Sign in with</p>
        <span class="separator"></span>
      </div>
      <button class="google-btn flex center">
        <img
          class="social-login-logo"
          src="https://cdn.monday.com/images/logo_google_v2.svg"
          aria-hidden="true"
          alt=""
        />
        <span>Google</span>
      </button>
      <span class="page-separator"></span>
      <div class="no-account flex column align-center">
        <p>
          Don't have an account yet?
          <RouterLink to="/signup" class="signup-page-link">Sign up</RouterLink>
        </p>
        <p>
          Can't log in?
          <RouterLink to="/help-center" class="help-center-page-link"
            >Visit our help center</RouterLink
          >
        </p>
      </div>
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
      credentials: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    onLoginBtn() { //change to async when moving to work w a database
      this.$store.dispatch({ type: 'login', credentials })
    }
  }
};
</script>

<style lang="scss">
@import '../style/setup/functions';

.login-section {
  main {
    .reg-login-wrapper {
      align-self: center;
      padding: 40px 40px 0 40px;

      h1 {
        font-size: em(40px);
        font-weight: 200;
        color: #333;
        text-align: center;

        span {
          font-weight: bold;
        }
      }

      .prop-wrapper {
        margin-block-end: em(20px);
        align-self: self-start;

        label {
          position: relative;
          color: #777;
          text-transform: capitalize;
          display: none;
        }

        input {
          padding: 6px 12px;
          width: em(360px);
          height: em(40px);
          border-radius: em(4px);
          border: 1px solid #ccc;
          font-size: 1em;
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
        width: 360px;
        color: #fff;
        height: em(48px);
        border-radius: 5px;
        margin-block-end: 32px;
        align-self: stretch;

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
      min-width: 100%;
      margin-block-end: 32px;

      .separator {
        width: 200px;
        border: 0.5px solid #c5c7d0;
        height: 0.5px;
      }

      p {
        min-width: max-content;
        padding-inline: 1rem;
      }
    }

    .google-btn {
      align-self: center;
      border-radius: 4px;
      padding: 12px 16px;
      border: 1px solid #c5c7d0;
      background-color: transparent;
      margin-block-end: 24px;

      img {
        margin-inline-end: 8px;
      }

      span {
        font-size: 14px;
        color: #333;
      }
    }

    .no-account {
      padding-block-end: 40px;

      .signup-page-link,
      .help-center-page-link {
        color: #0fa2e2;
      }
    }

    .page-separator {
      max-width: 540px;
      height: 0;
      border: 0.1px solid #eee;
      margin: 1rem;
    }
  }
}

@media (min-width: 521px) {
  .login-section {
    main {
      .reg-login-wrapper {
        padding-inline: 0;

        .prop-wrapper {
          gap: 8px;

          &:last-of-type {
            position: relative;
            left: -31px;
          }

          label {
            display: inline;
          }

          input.with-placeholder {
            display: none;
          }

          input.no-placeholder {
            display: inline-block;
          }
        }
      }

      .forgot-password-btn,
      .login-btn {
        margin-inline-start: 45px;
      }
    }
  }
}

@media (min-width: 572px) {
  .login-section {
    main {
      .page-separator {
        position: relative;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>