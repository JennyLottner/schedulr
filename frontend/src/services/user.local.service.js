import { storageService } from "./storage.service"

const USERS_KEY = 'users_db'
const USER_KEY = 'user_db'

let users = [
    {
        username: 'jenny',
        email: 'jenny@gmail.com',
        password: 'manoon',
        activities: []
    },
    {
        username: 'shoval',
        email: 'shoval@gmail.com',
        password: 'manoon',
        activities: []
    },
    {
        username: 'guest',
        email: 'guest@gmail.com',
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
        password: credentials.password,
        email: credentials.email
    }
    const users = _getUsers()
    const usersToUpdate = [...users, user]
    _updateUsers(usersToUpdate)
    login(credentials)
    return user
}

function login(credentials) {
    if (!storageService.loadFromStorage(USERS_KEY)) _initializeUsers()
    const users = _getUsers()
    const user = users.find(user => user.password === credentials.password && user.email === credentials.email)
    if (user) {
        _connectUserToStorage(user)
        return user
    }
    else {
        console.log('No user found')    
        return new Error('No user found')
    }

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
    const doesUserExist = users.find(user => user.email === credentials.email)
    return !doesUserExist && credentials.email.length > 1 & credentials.password.length > 4
}

function _initializeUsers() {
    const usersToSave = [...users]
    usersToSave.forEach(user => delete user.password)
    storageService.saveToStorage(USERS_KEY, usersToSave)
}

function _connectUserToStorage(user) {
    const userToSave = { ...user }
    delete userToSave.password
    storageService.saveToStorage(USER_KEY, userToSave)
}