import { json } from 'node:stream/consumers'
import { createTodo, findTodos, removeTodo, updateTodo } from "../todos_storage.js"


export async function index(req, rep) {
    return findTodos()
}

export async function create(req, rep) {            
    return createTodo(await json(req))
}

export async function remove(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10)
    await removeTodo(id)
    res.writeHead(204)
}

export async function update(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10)
    return updateTodo(id, await json(req))
}
