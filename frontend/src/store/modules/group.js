import { groupService } from "@/services/group/group.local.service.js"

export default {
    state: {
        groups: [],   // groups in current user board
    },
    mutations: {
        setGroups(state, groups) {
            state.groups = groups
        },
        removeGroup(state, groupId) {
            const idx = state.groups.findIndex(group => group._id === groupId)
            state.groups.splice(idx, 1)
        },
        updateGroup(state, updatedGroup) {
            const idx = state.groups.findIndex(group => group._id === updatedGroup._id)
            state.groups.splice(idx, 1, updatedGroup)
        },
        addGroup(state, newGroup) {
            state.groups.unshift(newGroup)
        },
    },
    actions: {
        async loadGroup({ commit }, { groupId }) {
            try {
                commit('setGroup', groupId)

                const group = await groupService.getGroup(groupId)
                return group
            } catch (err) {
                console.log('Error in group store:', err)
            }
        },
        async loadGroups({ commit }) {
            try {
                const groups = await groupService.query()
                commit('setGroups', groups)
            } catch (err) {
                console.log('Error in group store:', err)
            }
        },
        async removeGroup({ commit }, { groupId }) {
            try {
                await groupService.remove(groupId)
                commit('removeGroup', groupId)
            } catch (err) {
                console.log('Error in group store:', err)
            }
        },
        async saveGroup({ commit }, { editedGroup }) {
            try {
                await groupService.save(editedGroup)
                if (editedGroup._id) commit('updateGroup', editedGroup)
                else commit('addGroup', editedGroup)
            } catch (err) {
                console.log('Error in group store:', err)
            }
        },
    },
    getters: {
        groups(state) {
            return state.groups
        },
    }
}