import { json } from 'node:stream/consumers'
import { createTodo, findTodos } from "../todos_storage.js"


export async function index(req, rep) {
    const todos = await findTodos()
    return todos
}

export async function create(req, rep) {            
    const todo = await createTodo(await json(req))
    return todo
}

export async function remove(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10)
    await removeTodo(id)
    res.writeHead(204)
}