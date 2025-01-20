import { storageService } from "../storage.service"
const userBoards = []
const BOARDS_KEY = 'boards_db'
const user = userService.getUser()

// const defaultBoard = {
//     id: 1,
//     title: '',
//     members: [],
//     groups: [
//         {
//             groupTitle: '',
//             items: [
//                 {
//                     itemTitle: '',
//                     updates: [],
//                     people: [],
//                     status: '',
//                     date: new Date(),
//                     labels: [],
//                 },
//             ],
//         },
//     ],
// }

function loadUserBoards() {
    const boards = storageService.loadFromStorage(BOARDS_KEY)
    boards.forEach(board => {
        if(user.boards.has(board.id)) userBoards.push(board)
    })
}

function _changeTableField(boardId, tableId, field, value) {
    if (!(userBoards(boardId => id === boardId))) return console.error('The user has no access to this board')
    const boards = _getUserBoards()
    const chosenBoard = _getBoard(id)
    const boardToEdit = { ...chosenBoard }
    boardToEdit[field] = value
    const idxOfChosenBoard = boards.findIndex(board => id === board.id)
    boards[idxOfChosenBoard] = boardToEdit
    saveUpdatedBoards(boards)
}

const _getBoardsTable = (boardId, tableId) => {
    const chosenBoard = userBoards.find(board => board.id === boardId)
    return chosenBoard.groups.find(group => group.id === groupId)
}