'user strict'

const addBtn = document.querySelector('.add');
const doneBtn = document.querySelector('.done');
const delBtn = document.querySelector('.delete');
const addInput = document.querySelector('#input__add');
const outInput = document.querySelector('#input__out');
const todoHead = document.querySelector('.todo_box__header');
const todoBody = document.querySelector('.todo__body');
const todoText = document.querySelector('.todo_box__text');


// Добавление задачи 
addBtn.addEventListener('click', showTasks);

function showTasks (e) {
    e.preventDefault();
    // Запись введенных данных  в переменную
    const inputText = addInput.value;

        // Не добавлять пустую задачу 
        if (!inputText) {
            return;
        }

    // Создаем разметку для новой задачи
    const taskHTML = `
    <div class="todo__body">
    <div class="todo_box__body">
        <ul class="input__out">
            <ul>${inputText}</ul>
        </ul>
        <button class="todo_box__btn done" data-action="done">Готово</button>
        <button class="todo_box__btn delete" data-action="delete">Удалить</button>
    </div>
</div>
    ` ;

    // Добавляем задачу в HTML, отображаем на странице
    todoBody.insertAdjacentHTML('beforeend',taskHTML);

    if (todoBody.children.length >= 1) {
        todoText.classList.remove('hidden');
    }

    // Очищаем инпут и устанавливаем фокус на него
    addInput.value = '';
    addInput.focus();

        // Удаляем сообщение Список задач пуст
        if (todoBody.children.length >= 1) {
            todoHead.classList.add('hidden');
        }
}


// Удаление задачи 
todoBody.addEventListener('click', deleteTasks);

function deleteTasks (e) {
    if (e.target.dataset.action === 'delete') {
        const parentBox = e.target.closest('.todo__body');
        parentBox.remove();
    };

    if (todoBody.children.length < 1) {
        todoHead.classList.remove('hidden');
        todoText.classList.add('hidden');
    };
};

// Задача выполнена

todoBody.addEventListener('click', doneTasks);

function doneTasks (e) {
   if (e.target.dataset.action === 'done') {
    const parentBox = e.target.closest('.todo_box__body');
    parentBox.classList.toggle('done_task');
    console.log('clki1');
   }
}










