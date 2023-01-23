
const todoField = document.querySelector('.todoField')
const form = document.querySelector('.myForm')
const lists = document.querySelector('.item-list')


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const todo = new Todo(todoField.value);


    UI.displayData(todo);
})

//Btn Remove
document.querySelector('.item-list').addEventListener('click', (e)=>{
    UI.btnRemove(e.target)


})

class Todo{
    constructor(text){
        this.text = text
    }
}

class UI{


    static storedTodo(){
        const todos = StoredTodo;

        todos.forEach((todo)=> UI.displayData(todo))
    }


    static displayData(todo){
        const list = document.querySelector('.item-list')
        const row = document.createElement('div');
        row.classList.add('todo-item')

        row.innerHTML = `
          
            <p class="item">${todo.text}</p>
            <div class="action">
                <i class="fa-solid fa-trash btnRemove"></i>
            </div>
           
        `;

        list.appendChild(row);
       
    }

    static btnRemove(el){
            if(el.classList.contains('btnRemove')){
                el.parentElement.parentElement.remove()
            }
    }

}



// Get the date
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12){
    greet = 'Good Morning';
}else if (hrs >=12 && hrs <=17){
    greet = 'Good Afternoon';
}else if (hrs>=17 && hrs <=24){
    greet = 'Good Evening'
}

document.querySelector('.greet').innerHTML = greet

// Get
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var d = new Date();
var dayName = days[d.getDay()]

document.querySelector('.day').innerHTML = dayName;