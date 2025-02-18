// import userService from '../services/userService.js'

import { userService } from "@/services/user/user.local.service"
import { useStore } from "vuex"

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
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
    getters: {
        user(state) {
            return state.user
        },
        usersName(state) {
            if(state.user?.fullName) return state.user.fullName
            return 'Guest'
        },
        userImg(state) {
            return state.user.imgUrl
        },
        userBoards(state) {
            return state.user.boards
        },
    }
}