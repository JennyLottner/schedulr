import { storageService } from "./storage.service"

const USERS_KEY = 'users_db'
const USER_KEY = 'user_db'

let users = [
    {
        username: 'jenny',
        email: 'jenny@gmail.com',        
        imgUrl: 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-1/336327249_1399754383903354_5431621484366514305_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=7529rO5u1tAQ7kNvgEEoKSN&_nc_ht=scontent.fsdv1-2.fna&_nc_gid=AJMWynPri4HlHr79AxdDNqP&oh=00_AYBNuYj9-SgXl13ix9rrRHMcgWBFeaQqgUTQt_k2LyJZ_A&oe=6700CD62',
        password: 'manoon',
        activities: []
    },
    {
        username: 'shoval',
        email: 'shoval@gmail.com',
        imgUrl: 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/409621629_3462157944095507_399315322993000288_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AAjr-5x7C3oQ7kNvgGPEnb0&_nc_ht=scontent.fsdv1-2.fna&_nc_gid=AEZK1n0-pFOwR4VzGziaVgR&oh=00_AYCo6eHPoOilPHLotIoAeEeQZHRUE7_GeiIzNEQG44WnEg&oe=6700D3AC',
        password: 'manoon',
        activities: []
    },
    {
        username: 'guest',
        email: 'guest@gmail.com',
        imgUrl: 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/450085430_3609207502723883_1972484456701139373_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xVqB4dO96xMQ7kNvgHDFRCp&_nc_ht=scontent.fsdv1-2.fna&oh=00_AYD_5Iw53ksjJcK1RoZaBfaOiXv8dr6IybOBJD7hDFPIOQ&oe=6700F8D8',
        password: 'guest',
        activities: []
    }
]

export const userService = {
    login,
    signup,
    logout,
    getUser
}

function signup(credentials) {
    if (!storageService.loadFromStorage(USERS_KEY)) _initializeUsers()
    if (!_validateCredentials(credentials)) return new Error('Something is wrong with the credentials you provided')
    const user = {
        username: credentials.username,
        password: credentials.password,
        email: credentials.email
    }
    const usersToUpdate = [...users, user]
    _updateUsers(usersToUpdate)
    login(credentials)
    return user
}

function login(credentials) {
    if (!storageService.loadFromStorage(USERS_KEY)) _initializeUsers()
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

function getUser() {
    return storageService.loadFromStorage(USER_KEY)
}

function _updateUsers(usersToUpdate) {
    users = usersToUpdate
}

function _validateCredentials(credentials) {
    const doesUserExist = users.find(user => user.email === credentials.email)
    return !doesUserExist && credentials.email.length > 1 & credentials.password.length > 4
}

function _initializeUsers() {
    const usersToSave = users.map(user => ({ ...user }))
    usersToSave.forEach(user => delete user.password)
    storageService.saveToStorage(USERS_KEY, usersToSave)
}

function _connectUserToStorage(user) {
    const userToSave = { ...user }
    delete userToSave.password
    storageService.saveToStorage(USER_KEY, userToSave)
}