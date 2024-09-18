// import userService from '../services/userService.js'

import { userService } from "@/services/user.local.service"

export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async login({ commit }, { credentials }) {
            try {
                const user = await userService.login(credentials)
                commit('setUser', user)
            } catch (err) {
                console.log(err)
            }
        },
    },
}