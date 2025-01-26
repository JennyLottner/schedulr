import { itemService } from "@/services/item/item.local.service.js"

export default {
    state: {
        items: [],     // items in current user board
    },
    mutations: {
        setItems(state, items) {
            state.items = items
        },
        removeItem(state, itemId) {
            const idx = state.items.findIndex(item => item._id === itemId)
            state.items.splice(idx, 1)
        },
        updateItem(state, updatedItem) {
            const idx = state.items.findIndex(item => item._id === updatedItem._id)
            state.items.splice(idx, 1, updatedItem)
        },
        addItem(state, newItem) {
            state.items.unshift(newItem)
        },
    },
    actions: {
        async loadItem({ commit }, { itemId }) {
            try {
                commit('setItem', itemId)

                const item = await itemService.getItem(itemId)
                return item
            } catch (err) {
                console.log('Error in item store:', err)
            }
        },
        async loadItems({ commit }) {
            try {
                const items = await itemService.query()
                commit('setItems', items)
            } catch (err) {
                console.log('Error in item store:', err)
            }
        },
        async removeItem({ commit }, { itemId }) {
            try {
                await itemService.remove(itemId)
                commit('removeItem', itemId)
            } catch (err) {
                console.log('Error in item store:', err)
            }
        },
        async saveItem({ commit }, { editedItem }) {
            try {
                await itemService.save(editedItem)
                if (editedItem._id) commit('updateItem', editedItem)
                else commit('addItem', editedItem)
            } catch (err) {
                console.log('Error in item store:', err)
            }
        },
    },
    getters: { },
}