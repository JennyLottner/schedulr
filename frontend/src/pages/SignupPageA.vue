<template>
  <section class="signup-page grid">
    <main class="flex column center">
      <header class="flex column center">
        <h1>Welcome to schedulr</h1>
        <h2>Get started - it's free. No credit card needed.</h2>
      </header>

      <section class="signup-section flex column center">
        <div
          class="prop-wrapper grid align-center"
          v-for="(prop, idx) in formProps"
          :key="idx"
        >
          <label :for="prop">{{ prop }}</label>
          <input
            :type="prop"
            :id="prop"
            v-model="credentials[prop]"
            class="no-placeholder input"
          />
          <input
            :type="prop"
            :id="prop"
            v-model="credentials[prop]"
            class="with-placeholder input"
            :placeholder="prop"
          />
        </div>

        <button class="continue-btn flex center" @click="onContinue">
          Continue
        </button>
      </section>

      <section class="or-section flex center">
        <div class="divider"></div>
        <p>Or</p>
        <div class="divider"></div>
      </section>

      <button class="google-btn flex center">
        <img
          src="https://cdn.monday.com/images/logo_google_v2.svg"
          alt="google logo"
        />
        Continue with Google
      </button>

      <div class="account flex column align-center">
      <p class="terms">
        By proceeding, you agree to the <span>Terms of Service</span> and
        <span>Privacy Policy</span>
      </p>

        <p>
          Already have an account?
          <RouterLink to="/log_in" class="signup-page-link">Log in</RouterLink>
        </p>
      </div>
    </main>

    <div class="sign-up-a-img">
      <img
        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
        alt=""
        data-testid="right-side-asset"
        style="display: block"
      />
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      formProps: ["email"],
      credentials: {
        email: "",
      },
    }
  },
  methods: {
    onContinue() {
      if (this.credentials.email) {
        this.$router.push({
          path: '/sign_up',
          state: { email: this.credentials.email }
        })
      }
    },
  },
}
</script>
  
<style scoped lang="scss">
@import "../style/setup/vars";
@import "../style/setup/mixins";

.signup-page {
  color: $font-color;
  overflow: hidden;

  grid-template-columns: 1fr;

  main {
    margin-block: 2.5rem 1.5rem;
    padding-inline: 1rem;

    gap: 2rem;

    header {
      gap: 1rem;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1rem;
        font-weight: normal;
      }
    }

    .signup-section {
      width: 100%;
      padding-inline: 1rem;

      align-self: center;
      gap: 1.25rem;

      .prop-wrapper {
        width: 100%;

        label {
          position: relative;
          color: #777;
          text-transform: capitalize;
          display: none;
        }

        input {
          width: 100%;
          height: 2.25rem;
          padding-inline-start: 0.5rem;

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

      .continue-btn {
        @include blueBtn;
        width: 100%;
        font-size: 1.125rem;
        height: 2.5rem;

        gap: 0.25rem;
      }
    }

    .google-btn {
      color: $font-color;
      background-color: transparent;
      padding: 0.75rem 1rem;
      border-radius: $border-radius-xs;
      border: 1px solid $app-gray;

      gap: 0.5rem;

      img {
        width: 1.125rem;
      }
    }

    .or-section {
      min-width: 100%;
      margin-block: -0.5rem;

      .divider {
        width: 200px;
        max-width: calc(40vw - 2rem);
        border: 0.5px solid #c5c7d0;
      }

      p {
        min-width: max-content;
        padding-inline: 1rem;
      }
    }

    .account,
    .terms {
      gap: 0.5rem;
      font-size: 0.9rem;

      a,
      span {
        @include blueLink;

        cursor: pointer;
      }
    }
  }

  .sign-up-a-img {
    display: none;
    max-width: 50vw;
    height: 100vh;
    object-fit: contain;
    align-items: baseline;
    background-color: #6160ff;

    img {
      width: 100%;
    }
  }
}

@media (width > 600px) {
  .signup-page {
    grid-template-columns: 60% 40%;

    main {
      .signup-section {
        max-width: 22.5rem;

        form {
          .prop-wrapper {
            grid-template-columns: 4.1rem 1fr;
            gap: 8px;

            label {
              display: inline;
            }

            input {
              max-width: calc(50vw - 4rem);
            }

            input.with-placeholder {
              display: none;
            }

            input.no-placeholder {
              display: inline-block;
            }
          }

          .continue-btn {
            min-width: 22.5rem;
            width: calc(80% - 4rem);
            align-self: center;
          }
        }
      }

      .or-section .divider {
        max-width: 20vw;
      }
    }

    .sign-up-a-img {
      display: block;
    }
  }
}
</style>