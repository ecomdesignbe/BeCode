const list = document.querySelector('#todo-list ul')


// add todo

const addForm = document.forms['add-todo']
addForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    const value = addForm.querySelector('input[type="text"]').value

    // create elements
    const li = document.createElement('li')
    const todoName = document.createElement('span')
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete'

    // add content
    deleteBtn.textContent = ' delete todo'
    todoName.textContent = value
    localStorage.setItem("Todo",value)


    // apprend to document
    li.appendChild(todoName)
    li.appendChild(deleteBtn)
    list.appendChild(li);

    // delete todo
    list.addEventListener('click', function(e){
        if(e.target.className == 'delete') {
            const li = e.target.parentElement
            list.removeChild(li)
            localStorage.removeItem("Todo",value)
        }
    })
})