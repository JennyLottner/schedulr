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
    actions: { //Make async when moving to service that works w backend and database
        login({ commit }, { credentials }) {
            const user = userService.login(credentials)
            commit('setUser', user)
        },
        signup({ commit }, { credentials }) {
            const user = userService.signup(credentials)
            commit('setUser', user)
        },
        logout({ commit }) {
            userService.logout()
            commit('setUser', null)
        }
    },
}