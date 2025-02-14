<template>
  <section class="login-section">
    
    <header>
      <img class="schedulr-logo" src="../assets/pics/schedulr-logo.png" alt="Schedulr logo"/>
      <h1>schedulr</h1>
    </header>

    <main class="flex column center">
      <div class="reg-login-wrapper flex column">
        <h1>Log in to your account</h1>
        <div
          class="prop-wrapper grid align-center"
          v-for="prop in formProps"
          :key="prop.prop"
        >
          <label v-bind:for="prop.prop" v-bind:class="prop.prop + 'label'">{{
            prop.prop
          }}</label>
          <input
            v-bind:type="prop.prop"
            v-bind:id="prop.prop"
            v-model="credentials[prop.prop]"
            class="no-placeholder input"
          />
          <input
            v-bind:type="prop.prop"
            v-model="credentials[prop.prop]"
            class="with-placeholder input"
            v-bind:placeholder="prop.prop"
          />
        </div>

        <div class="links flex align-center space-between">
          <button>Forgot your password?</button>
          <button @click="onLoginBtn(true)">
            Continue as Guest
          </button>
        </div>

        <button class="login-btn flex center" @click="onLoginBtn()">
          Log in
          <svg  viewBox="0 0 20 20"  fill="currentColor"  width="20"  height="20"  aria-hidden="true"  class="icon_d6a7187c13 rightIcon_22e312003f noFocusStyle_48049c26c1"  data-testid="icon">  <path    d="M2.24999 10.071C2.24999 9.65683 2.58578 9.32104 2.99999 9.32104L15.3315 9.32105L10.7031 4.69273C10.4103 4.39983 10.4103 3.92496 10.7031 3.63207C10.996 3.33917 11.4709 3.33917 11.7638 3.63207L17.6725 9.54071C17.9653 9.83361 17.9653 10.3085 17.6725 10.6014L11.7638 16.51C11.4709 16.8029 10.996 16.8029 10.7031 16.51C10.4103 16.2171 10.4103 15.7423 10.7031 15.4494L15.3315 10.821L2.99999 10.821C2.58578 10.821 2.24999 10.4853 2.24999 10.071Z"    fill="#fff"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
        </button>
      </div>

      <div class="sign-in-google flex center">
        <div class="divider"></div>
        <p>Or Sign in with</p>
        <div class="divider"></div>
      </div>

      <button class="google-btn flex center">
        <img src="https://cdn.monday.com/images/logo_google_v2.svg"  alt="google logo"/>
        Google
      </button>

      <div class="page-separator"></div>

      <div class="no-account flex column align-center">
        <p>
          Don't have an account yet?
          <RouterLink to="/sign_up_new" class="signup-page-link">Sign up</RouterLink>
        </p>
        <p>
          Can't log in?
          <RouterLink to="/help-center" class="help-center-page-link">
            Visit our help center
          </RouterLink>
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formProps: [{ prop: "email" }, { prop: "password" }],
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onLoginBtn(isGuest = false) {
      //change to async when moving to work w a database
      if (isGuest) {
        this.credentials.email = "guest@gmail.com";
        this.credentials.password = "guest";
      }
      this.$store.dispatch({ type: "login", credentials: this.credentials });
      this.$router.push({ name: 'main' }) //should be home but does;t work without reloading...
    },
  },
}
</script>

<style lang="scss">
@import "../style/setup/functions";
@import "../style/setup/vars";
@import "../style/setup/mixins";

.login-section {
  color: $font-color;

  header {
    height: 3.5rem;
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

  main {
    margin-block: 2.5rem 1.5rem;
    gap: 2rem;

    .reg-login-wrapper {
      padding-inline: 1rem;
      align-self: center;
      gap: 1.25rem;

      h1 {
        font-size: em(40px);
        font-weight: 200;
        text-align: center;
      }

      .prop-wrapper {
        grid-template-columns: 4.1rem 1fr;
        width: 100%;

        label {
          position: relative;
          color: #777;
          text-transform: capitalize;
          display: none;
        }

        input {
          max-width: calc(100vw - 2rem);
          width: 22.5rem;
          height: 2.25rem;
          border: 1px solid #ccc;
          font-size: 1rem;

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

      .links {
        padding-inline: 0.25rem;

        button {
          @include blueLink;
          background-color: transparent;
          font-size: 0.9rem;
        }
      }

      .login-btn {
        @include blueBtn;
        font-size: 1.125rem;
        height: 2.5rem;
        width: 85%;

        align-self: center;
        gap: 0.25rem;
      }
    }

    .sign-in-google {
      min-width: 100%;

      .divider {
        width: 200px;
        max-width: calc(40vw - 70px);
        border: 0.5px solid #c5c7d0;
      }

      p {
        min-width: max-content;
        padding-inline: 1rem;
      }
    }

    .google-btn {
      color: $font-color;
      background-color: transparent;
      padding: 0.75rem 1rem;
      border-radius: $border-radius-xs;
      border: 1px solid $app-gray;
      margin-block-start: -0.5rem;

      gap: 0.5rem;

      img {
        width: 1.125rem;
      }
    }

    .page-separator {
      margin-block: -0.5rem;
      width: 33.75rem;
      max-width: 80%;
      background-color: $app-gray;
      border: 1px solid #c5c7d0;
    }

    .no-account {
      font-size: 0.9rem;

      a {
        @include blueLink;
      }
    }
  }
}

@media (width > 521px) {
  .login-section {
    main {
      .reg-login-wrapper {
        .prop-wrapper {
          gap: 8px;

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
    }
  }
}
</style>