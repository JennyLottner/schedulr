import { storageService } from "../storage.service"
import { userService } from "../user/user.local.service"

const BOARDS_KEY = 'boards_db'
const user = userService.getUser() || null
const userBoards = []

const defaultBoard = {
    id: 1,
    title: '',
    members: [],
    groups: [
        {
            groupTitle: '',
            items: [
                {
                    itemTitle: '',
                    updates: [],
                    people: [],
                    status: '',
                    date: new Date(),
                    labels: [],
                },
            ],
        },
    ],
}

export const boardService = {
    createDefaultBoard,
    changeBoardTitle,
    toggleBoardToUserFavoriteBoards,
    addMemberToBoard,
    addGroup
}

const _setUserBoards = () => {
    const boards = storageService.loadFromStorage(BOARDS_KEY)
    if (boards) boards.forEach(board => {
        if (user.boards.has(board.id)) userBoards.push(board)
    })
}

const _getUserBoards = () => userBoards

const _getBoards = () => storageService.loadFromStorage(BOARDS_KEY)

const saveUpdatedBoards = (boards) => storageService.saveToStorage(BOARDS_KEY, boards)

const createDefaultBoard = () => defaultBoard

const _getBoard = (id) => storageService.loadFromStorage(BOARDS_KEY).find(board => id === board.id)

function changeBoardField(field, id, value) {
    if (!(userBoards(boardId => id === boardId))) return console.error('The user has no access to this board')
    const boards = _getUserBoards()
    const chosenBoard = _getBoard(id)
    const boardToEdit = { ...chosenBoard }
    boardToEdit[field] = value
    const idxOfChosenBoard = boards.findIndex(board => id === board.id)
    boards[idxOfChosenBoard] = boardToEdit
    saveUpdatedBoards(boards)
}

function changeBoardTitle(id, title) {
    changeBoardField('title', id, title)
}

function toggleBoardToUserFavoriteBoards(id) {
    const userBoards = user.boards
    userBoards[id] ?
        userBoards[id].set(false) :
        favoriteBoards.set(true)
}

const addMemberToBoard = (boardId, userId) => {
    const boards = _getBoards()
    const boardsToUpdate = [...boards]
    const chosenBoard = _getBoard(boardId)
    const chosenBoardIdx = boards.findIndex(board => board.id === boardId)
    const boardToEdit = { ...chosenBoard }
    boardToEdit.members.push(userId)
    boardsToUpdate[chosenBoardIdx] = boardToEdit
    saveUpdatedBoards(boardsToUpdate)
}

const _createGroup = () => {
    return {
        groupTitle: '',
        items: [
            {
                itemTitle: '',
                updates: [],
                people: [],
                status: '',
                date: new Date(),
                labels: [],
            }]
    }
}

const addGroup = (boardId) => {
    const boards = _getBoards()
    const board = _getBoard(boardId)
    const chosenBoardIdx = boards.findIndex(board => board.id === boardId)
    const boardsToUpdate = [ ...boards ]
    const group = _createGroup()
    board.groups.push(group)
    boardsToUpdate[chosenBoardIdx] = board
    saveUpdatedBoards(boardsToUpdate)
}