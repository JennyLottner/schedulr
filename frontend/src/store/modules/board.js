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
        async loadBoards({ commit }) {
            try {
                const boards = await boardService.query()
                commit('setBoards', boards)
            } catch (err) { 
                console.log('Error in board store:',err)
            }
        },
    },
    getters: {
        board(state) {
            const idx = state.boards.findIndex(board => board._id === state.currBoardId)
            return state.board[idx]
        }
    }
}