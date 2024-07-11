import {readFile, writeFile } from 'node:fs/promises'
import { NotFoundError } from './errors.js'


const path = 'storage/todos.json'

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed 
 */

/**
 * @return {Promise<Todo[]>}
 */

export async function findTodos() {
    const data = await readFile(path, 'utf8')
    return JSON.parse(data)
}

/**
 * 
 * @param {string} title 
 * @param {boolean} completed  
 * @return {Promise<Todo>} completed  
 */
export async function createTodo({title, completed = false}) {
    const todo = {title, completed, id: Date.now()}
    const todos = [todo, ...await findTodos()]
    await writeFile(path, JSON.stringify(todos, null, 2))
    return todo
}

/**
 * 
 * @param {number} id 
 * @return {Promise<>}   
 */
export async function removeTodo(id) {
    const todos = await findTodos()
    const todo = todos.findIndex(todo => todo.id == id)
    if (todo === -1) {
        throw new NotFoundError()
    }    
    await writeFile(path, JSON.stringify(todos.filter(todo => todo.id !== id), null, 2))
}


/**
 * 
 * @param {number} id 
 * @param {{completed?: boolean, title?: string}} partialTodo   
 * @return {Promise<Todo>}   
 */
export async function updateTodo(id, partialTodo) {
    const todos = await findTodos()
    const todo = todos.find(todo => todo.id == id) 
    if(todo === undefined) {
        throw new NotFoundError()
    }
    // todo.completed = completed
    // todo.title = title
    Object.assign(todo, partialTodo)
    await writeFile(path, JSON.stringify(todos, null, 2))
    return todo
}