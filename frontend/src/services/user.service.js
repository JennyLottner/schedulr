import { storageService } from "./storage.service"

const BASE_URL = 'auth/'
const USER_URL = 'user/'
const STORAGE_KEY_LOGGEDIN = 'loggedInUser'

export const userService = {
    login,
    signup,
    logout,
    getById
}

async function login({ username, password }) {
    try {
        const user = await httpService.post(BASE_URL + 'login', { username, password })
        if (user) return _setLoggedInUser(user)
        else return Promise.reject('Invalid login')
    } catch (error) {
        console.error('Error occurred during login:', error)
        throw error
    }
}

async function signup({ username, password }) {
    try {
        const user = { username, password }
        const userToSave = await httpService.post(BASE_URL + 'signup', user)
        _setLoggedInUser(userToSave)
        return userToSave
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function logout() {
    try {
        await httpService.post(BASE_URL + 'logout')
        storageService.removeFromStorage(STORAGE_KEY_LOGGEDIN)
    } catch (err) {
        console.log(err)
    }
}

function getById(userId) {
    return httpService.get('user/' + userId)
}

function _setLoggedInUser(user) {
    const userToSave = { ...user }
    storageService.saveToStorage(STORAGE_KEY_LOGGEDIN, userToSave)
    return userToSave
}