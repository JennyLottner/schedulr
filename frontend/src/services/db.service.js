'use strict'

import { httpService } from "./http.service"

export const dbService = {
    query,
    get,
    post,
    put,
    remove,
}

async function query(endpoint, filterBy = {}) {
    try {
        const entities = await httpService.get(endpoint, filterBy)
        return entities
    } catch (err) {
        throw err
    }
}

async function get(endpoint, entityId) {
    try {
        const entity = httpService.get(`${endpoint}/${entityId}`)
        if (!entity) throw new Error(`Get failed, cannot find ${endpoint} with id: ${entityId}.`)
        return entity
    } catch (err) {
        throw err
    }
}

async function post(endpoint, newEntity) {
    try {
        httpService.post(endpoint, newEntity)
        return newEntity
    } catch (err) {
        throw err
    }
}

async function put(endpoint, updatedEntity) {
    try {
        httpService.put(endpoint, updatedEntity)
    } catch (err) {
        throw err
    }
}

async function remove(endpoint, entityId) {
    try {
        httpService.delete(endpoint, entityId)
    } catch (err) {
        throw err
    }
}