import { boardService } from "@/services/board/board.local.service.js"

export default {
    state: {
        boards: [],
        currBoardId: null,
    },
    mutations: {
        setBoard(state, boardId) {
            state.currBoardId = boardId
        },
        setBoards(state, boards) {
            state.boards = boards
        },
        removeBoard(state, boardId) {
            const idx = state.boards.findIndex(board => board._id === boardId)
            state.boards.splice(idx, 1)
        },
        updateBoard(state, updatedBoard) {
            const idx = state.boards.findIndex(board => board._id === updatedBoard._id)
            state.boards.splice(idx, 1, updatedBoard)
        },
        addBoard(state, newBoard) {
            state.boards.unshift(newBoard)
        },
    },
    actions: {
        async loadBoard({ commit }, { boardId }) {
            try {
                commit('setBoard', boardId)

                const board = await boardService.getBoard(boardId)
                return board
            } catch (err) {
                console.log('Error in board store:', err)
            }
        },
        async loadBoards({ commit }) {
            try {
                const boards = await boardService.query()
                commit('setBoards', boards)
            } catch (err) {
                console.log('Error in board store:', err)
            }
        },
        async removeBoard({ commit }, { boardId }) {
            try {
                await boardService.remove(boardId)
                commit('removeBoard', boardId)
            } catch (err) {
                console.log('Error in board store:', err)
            }
        },
        async saveBoard({ commit }, { editedBoard }) {
            try {
                await boardService.save(editedBoard)
                if (editedBoard._id) commit('updateBoard', editedBoard)
                else commit('addBoard', editedBoard)
            } catch (err) {
                console.log('Error in board store:', err)
            }
        },
    },
    getters: {
        board(state) {
            const idx = state.boards.findIndex(board => board._id === state.currBoardId)
            return state.boards[idx]
        },
        boards(state) {
            return state.boards
        },
    }
}