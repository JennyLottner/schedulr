<template>
    <main>
        <AppHeader/>
        <NavBar/>
        <RouterView/>
    </main>
</template>

<script>
import { RouterView } from 'vue-router';
import AppHeader from '../cmps/AppHeader.vue'
import NavBar from '../cmps/NavBar.vue'

export default {
components: { AppHeader, NavBar}
}
</script>

<style lang="scss">
</style>