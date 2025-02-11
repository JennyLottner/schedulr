import { storageService } from "../storage.service"
import { userService } from "../user/user.local.service"
import { utilService } from "../util.service"

const BOARDS_KEY = 'boards_db'
const user = userService.getUser() || null
let cachedBoards = []

const defaultBoard = {
    id: 1,
    title: '',
    members: [],
    groups: [
        {
            groupTitle: '',
            id: 1,
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
    addGroup,
    query,
    getBoard,
    save,
    getUserBoards
}

const getUserBoards = () => {
    const userBoards = []
    const boards = query()
    if (boards) boards.forEach(board => {
        if (user.boards.has(board.id)) userBoards.push(board)
    })
    return userBoards
}

const query = () => cachedBoards.length ? cachedBoards : storageService.loadFromStorage(BOARDS_KEY)

const saveUpdatedBoards = (boards) => storageService.saveToStorage(BOARDS_KEY, boards)

const createDefaultBoard = () => defaultBoard

const getBoard = (id) => storageService.loadFromStorage(BOARDS_KEY).find(board => id === board.id)

function updateBoard(board) {
    const boards = query()
    const chosenBoard = boards.find(_board => _board.id === board.id)
    if (!chosenBoard.members.find(member => member.id === user.id)) return console.error('The user has no access to this board')
    const idxOfChosenBoard = boards.findIndex(_board => _board.id === board.id)
    boards[idxOfChosenBoard] = boardToEdit
    saveUpdatedBoards(boards)
}

function addBoard(board) {
    const boards = query()
    if (!board.members.find(member => member.id === user.id)) return console.error('The user has no access to this board')
    board.id = utilService.makeId()
    boards.push(board)
    saveUpdatedBoards(boards)
}

function toggleBoardToUserFavoriteBoards(id) {
    const userBoards = user.boards
    userBoards.get(id) ? userBoards[id].set(false) : favoriteBoards.set(true)
}

const addMemberToBoard = (boardId, userId) => {
    const boards = query()
    const updatedBoards = [ ...boards ]
    const chosenBoard = getBoard(boardId)    
    const boardToEdit = { ...chosenBoard }
    const chosenBoardIdx = boards.findIndex(board => board.id === boardId)
    boardToEdit.members.push(userId)
    updatedBoards[chosenBoardIdx] = boardToEdit
    saveUpdatedBoards(updatedBoards)
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
    const boards = query()
    const board = getBoard(boardId)
    const chosenBoardIdx = boards.findIndex(board => board.id === boardId)
    const boardsToUpdate = [...boards]
    const group = _createGroup()
    board.groups.push(group)
    boardsToUpdate[chosenBoardIdx] = board
    saveUpdatedBoards(boardsToUpdate)
}

function save(editedBoard) {
    if (editedBoard.id) updateBoard(editedBoard)
    else addBoard(editedBoard)
}