// import userService from '../services/userService.js'

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
        setUser(state, {user}) {
            state.user = user
        }
    },
    actions: {
        async setUser({commit}, {user}) {
            try {
                // await userService.setUser(user) //to change db
                commit('setUser', user) // to change store
            } catch (err) { console.log(err)}
        }
    },
}