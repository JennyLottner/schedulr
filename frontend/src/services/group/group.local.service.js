import { storageService } from "../storage.service"
import { boardService } from "../board/board.local.service"

const userBoards = []
const BOARDS_KEY = 'boards_db'
const user = userService.getUser()


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
    const groupToEdit = { ...chosenGroup }
    groupToEdit[field] = value
    const idxOfChosenGroup = boards.groups.findIndex(group => id === group.id)
    boardsToUpdate = [...boards]
    boardsToUpdate.groups[idxOfChosenGroup] = groupToEdit
    boardService.saveUpdatedBoards(boardsToUpdate)
}

const _getBoardGroupAndGroupIdx = (boardId, groupId, boards) => {
    const chosenBoard = boards.find(board => board.id === boardId)
    const chosenGroupIdx = chosenBoard.groups.findIndex(group => group.id === groupId)
    const chosenGroup = chosenBoard.groups.find(group => group.id === groupId)
    return [chosenGroup, chosenGroupIdx]
}

function _changeGroupItemField(boardId, groupId, itemId, field, value) {
    if (!(userBoards(boardId => id === boardId))) return console.error('The user has no access to this board')
    const boards = boardService.getBoards()
    const chosenGroupAndGroupIdx = _getBoardGroupAndGroupIdx(boardId, groupId, boards)
    if (!chosenGroup) return console.error('The user has no access to this group')
    const idxOfChosenGroup = chosenGroupAndGroupIdx[1]
    const groupToEdit = { ...chosenGroupAndGroupIdx[0] }
    const itemToEdit = groupToEdit.find(item => item.id === itemId)
    if (field === 'title' || field === 'status') itemToEdit[field] = value
    else itemToEdit[field].unshift(value)
    const idxOfChosenItem = groupToEdit.findIndex(item => item.id === itemId)
    groupToEdit.items[idxOfChosenItem] = itemToEdit
    boardsToUpdate = [...boards]
    const chosenBoardIdx = boards.findIndex(board => board.id === boardId)
    boardsToUpdate[chosenBoardIdx].groups[idxOfChosenGroup] = groupToEdit
    boardService.saveUpdatedBoards(boardsToUpdate)
}

function editGroupTitle(boardId, groupId, val) {
    _changeGroupField(boardId, groupId, 'groupTitle', val)
}

function editItemTitle(boardId, groupId, itemId, val) {
    _changeGroupItemField(boardId, groupId, itemId, 'itemTitle', val)
}

function addUpdateToItem(boardId, groupId, itemId, val) {
    _changeGroupItemField(boardId, groupId, itemId, 'updates', val)
}

function addPersonToItem(boardId, groupId, itemId, val) {
    _changeGroupItemField(boardId, groupId, itemId, 'persons', val)
}

function addLabelToItem(boardId, groupId, itemId, val) {
    _changeGroupItemField(boardId, groupId, itemId, 'labels', val)
}

function removeValueFromItem(boardId, groupId, itemId, field, val) {
    if (!(userBoards(boardId => id === boardId))) return console.error('The user has no access to this board')
    const boards = boardService.getBoards()
    const chosenGroupAndGroupIdx = _getBoardGroupAndGroupIdx(boardId, groupId, boards)
    if (!chosenGroup) return console.error('The user has no access to this group')
    const idxOfChosenGroup = chosenGroupAndGroupIdx[1]
    const groupToEdit = { ...chosenGroupAndGroupIdx[0] }
    const itemToEdit = groupToEdit.find(item => item.id === itemId)
    const valueToRemoveIdx = itemToEdit[field].findIndex(value => value === val)
    itemToEdit[field].splice(valueToRemoveIdx, 1)
    const idxOfChosenItem = groupToEdit.findIndex(item => item.id === itemId)
    groupToEdit.items[idxOfChosenItem] = itemToEdit
    boardsToUpdate = [...boards]
    const chosenBoardIdx = boards.findIndex(board => board.id === boardId)
    boardsToUpdate[chosenBoardIdx].groups[idxOfChosenGroup] = groupToEdit
    boardService.saveUpdatedBoards(boardsToUpdate)
}

function removeUpdateToItem(boardId, groupId, itemId, val) {
    _removeValueFromItem(boardId, groupId, itemId, 'updates', val)
}

function removePersonToItem(boardId, groupId, itemId, val) {
    _removeValueFromItem(boardId, groupId, itemId, 'persons', val)
}

function removeLabelToItem(boardId, groupId, itemId, val) {
    _removeValueFromItem(boardId, groupId, itemId, 'labels', val)
}

export const groupService = {
    editGroupTitle,
    editItemTitle,
    addUpdateToItem,
    addPersonToItem,
    addLabelToItem,
    removeLabelToItem,
    removePersonToItem,
    removeUpdateToItem
}