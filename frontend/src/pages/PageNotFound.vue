<template>
    <section class="page-not-found-page grid">
        <AppHeader/>

        <section class="page-not-found-section flex column align-center">
            <img src="https://cdn.monday.com/images/404_error.png" alt="" width="146" height="174">
            <h1>We couldn't find the content you were looking for</h1>
            <h2>We track these errors automatically, but if the problem reoccurs please <RouterLink to="/about">contact us</RouterLink>.</h2>
        </section>
    </section>
</template>

<script>
import AppHeader from '@/cmps/AppHeader.vue'

export default {
components: {
    AppHeader
},
}
</script>

<style lang="scss">
@import "../style/setup/vars";
@import "../style/setup/mixins";

.page-not-found-page {
    grid-template-rows: 3rem 1fr;

    .app-header {
        background-color: $blue-background;
    }

    .page-not-found-section {
        margin-block-start: 3.75rem;
        gap: 1.5rem;

        h1 {
            font-size: 1.6875rem;
            font-weight: 500;
        }
        
        h2 {
            font-size: 0.9375rem;
            font-weight: 500;
        }

        a {
            @include blueLink
        }
    }
}
</style>