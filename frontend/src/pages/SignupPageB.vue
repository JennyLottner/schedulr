<template>
  <section class="signup-page grid">
    <main class="flex column justify-center">
      <header>
        <div class="logo flex align-center">
          <img src="../assets/pics/schedulr-logo.png" alt="logo" />
          <h2>schedulr</h2>
        </div>
        <h1>Create your account</h1>
      </header>

      <form class="flex column" @submit.prevent="onSignup">
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
        </div>  <!-- make condition for image input-->

        <button class="continue-btn flex center" type="submit">Sign up</button>
      </form>
    </main>

    <div class="sign-up-b-img flex">
      <img
        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
        alt=""
        data-testid="right-side-asset"
        style="display: block"
      />
    </div>
  </section>
</template>
    
  <script>
export default {
  props: {
    email: { type: String, required: true },
  },
  data() {
    return {
      formProps: ["fullName", "imgUrl", "username", "password"],
      credentials: {
        username: "",
        fullName: "",
        email: this.email,
        imgUrl: "",
        password: "",
        boards: new Map(),
      },
    }
  },
  methods: {
    onSignup() {
      this.$store.dispatch({ type: "signup", credentials: this.credentials });
      this.$router.replace({ name: '/home' })
    },
  },
  mounted() {
  this.credentials.email = history.state.email // Access email from SignupPageA
}
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

    align-items: center;
    gap: 2rem;

    header {
      text-align: center;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }

      .logo {
        gap: 0.5rem;

        img {
          height: 1.75rem;
        }
      }
    }

    form {
      width: 100%;
      padding-inline: 1rem;

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
        font-size: 1.125rem;
        height: 2.5rem;

        gap: 0.25rem;
      }
    }
  }

  .sign-up-b-img {
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
        align-items: start;
        margin-inline-start: 10%;

      form {
        max-width: 80%;

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

    .sign-up-b-img {
      display: block;
    }
  }
}
</style>