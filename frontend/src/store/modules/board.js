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
    },
    getters: {
    }
}