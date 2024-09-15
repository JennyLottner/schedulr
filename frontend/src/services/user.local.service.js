import { storageService } from "./storage.service"

const USERS_KEY = 'users_db'
const USER_KEY = 'user_db'

let users = [
    {
        username: 'jenny',
        password: 'manoon',
        activities: []
    },
    {
        username: 'shoval',
        password: 'manoon',
        activities: []
    },
    {
        username: 'guest',
        password: 'guest',
        activities: []
    }
]

export const userService = {
    login,
    signup,
    logout
}

function signup(credentials) {
    if (!storageService.loadFromStorage(USERS_KEY)) _initializeUsers()
    if (!_validateCredentials(credentials)) return new Error('Something is wrong with the credentials you provided')
    const user = {
        username: credentials.username,
        password: credentials.password
    }
    const users = _getUsers()
    const usersToUpdate = [...users, user]
    _updateUsers(usersToUpdate)
    login(credentials)
    delete user.password
    storageService.saveToStorage(USER_KEY, user)
}

function login(credentials) {
    if (!storageService.loadFromStorage(USERS_KEY)) _initializeUsers()
    const users = _getUsers()
    const user = users.find(user => user.password === credentials.password && user.username === credentials.username)
    if (user) {
        delete user.password
        storageService.saveToStorage(USER_KEY, user)
        return user
    }
    return new Error('No user found')
}

function logout() {
    storageService.removeFromStorage(USER_KEY)
}

function _getUsers() {
    return users
}

function _updateUsers(usersToUpdate) {
    users = usersToUpdate
}

function _validateCredentials(credentials) {
    const users = _getUsers()
    const doesUserExist = users.find(user => user.username === credentials.username)
    return !doesUserExist && credentials.username.length > 1 & credentials.password.length > 4
}

function _initializeUsers() {
    const usersToSave = [...users]
    usersToSave.forEach(user => delete usersToSave[user].password)
    storageService.saveToStorage(USERS_KEY, usersToSave)
}