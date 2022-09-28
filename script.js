let popList = document.getElementById("todo-list")

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    console.log('arrayOfTodos in POPULATE:', arrayOfTodos)
    for(let i = 0; i < arrayOfTodos.length; i++) {
        const todo = arrayOfTodos[i]
        console.log('todo:', todo)
        console.log('todo[title]:', todo.title)


        // let userTitle = document.createElement("LI")
        // userTitle.innerHTML = todo.title
        // popList.appendChild(userTitle)
        // let spacebar = document.createElement("BR")
        // let userIDInsert = document.createTextNode(todo.userId)
        // let IDInsert = document.createTextNode(todo.id)
        // let completed = document.createTextNode(todo.completed)
        // popList.append("User ID: ", userIDInsert, spacebar, " ID: ", IDInsert, spacebar, " Completed? ", completed)

        // Template Literal!!!
        let JuanVar = `
        <p>
        #${i + 1}. Title: ${todo.title}
        </p>
        <p>
        User ID: ${todo.userId}
        </p>
        <p>
        Completed: ${todo.completed}
        </p>
        `
        popList.insertAdjacentHTML("beforeend", JuanVar)
    }
}

const arrayOfTodos1 = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}
]

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20