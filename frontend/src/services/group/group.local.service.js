import { storageService } from "../storage.service"
import { boardService } from "../board/board.local.service"

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
// id: 1
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
        if (user.boards.has(board.id)) userBoards.push(board)
    })
}

function _changeGroupField(boardId, groupId, field, value) {
    if (!(userBoards(boardId => id === boardId))) return console.error('The user has no access to this board')
    const boards = boardService.getBoards()
    const chosenGroup = _getBoardsGroup(boardId, groupId, boards)
    if (!chosenGroup) return console.error('The user has no access to this group')
    const groupToEdit = { ...chosenBoard }
    groupToEdit[field] = value
    const idxOfChosenGroup = boards.groups.findIndex(group => id === group.id)
    boardsToUpdate = [ ...boards ]
    boardsToUpdate.groups[idxOfChosenGroup] = groupToEdit
    boardService.saveUpdatedBoards(boardsToUpdate)
}

const _getBoardsGroup = (boardId, groupId, boards) => {
    const chosenBoard = boards.find(board => board.id === boardId)
    return chosenBoard.groups.find(group => group.id === groupId)
}
