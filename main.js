const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')
const select = document.querySelector('select')

addBtn.addEventListener('click', addToDo)
ul.addEventListener('click', deletCheck)
select.addEventListener('click', filterToDo)


function addToDo(e) {
    e.preventDefault()


    const newDiv = document.createElement('div')
    newDiv.classList.add('div-list')
    ul.appendChild(newDiv)

    const newLi = document.createElement('li')
    newLi.classList.add('todo-item')
    newDiv.appendChild(newLi)
    
    const newPi = document.createElement('p')
    newPi.classList.add('text')
    newLi.appendChild(newPi)
    newPi.textContent = input.value
 
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('checked')
    newDiv.appendChild(checkBtn)
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`

    const trashBtn = document.createElement('button')
    trashBtn.classList.add('delet')
    newDiv.appendChild(trashBtn)
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`

    input.value = ''
}


function deletCheck(e) {
    const item = e.target

    if(item.classList[0] === 'delet') {
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }
    
    if(item.classList[0] === 'checked') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterToDo(e) {
    const todos = ul.childNodes

    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed' :
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }else {
                    todo.style.display = 'none'
                }
                break;
            case 'uncompleted' :
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }else {
                    todo.style.display = 'none'
                }
                break;
        }
    })
}
