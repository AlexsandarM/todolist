
const list = document.querySelector(".todos");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");


// create Todo

const generateTemplate = todo => {

  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i></li>`;

  list.innerHTML += html;
}

// adding todos

addForm.addEventListener("submit", e => {
  e.preventDefault();

  const todo = addForm.add.value.trim();
  console.log(todo)
  if(todo.length){
    generateTemplate(todo);
    addForm.reset()
  }
  
})

// deleting todos

list.addEventListener("click", e => {
  
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
})



// Filtering function
const filterTodos = term => {

  Array.from(list.children)
  .filter((filterdItem) =>  !filterdItem.textContent.toLocaleLowerCase().includes(term))
  .forEach((filterdItem) => filterdItem.classList.add("filtered"));

  Array.from(list.children)
  .filter((filterdItem) =>  filterdItem.textContent.toLocaleLowerCase().includes(term))
  .forEach((filterdItem) => filterdItem.classList.remove("filtered"));
};

// Flitering todos
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLocaleLowerCase();
  filterTodos(term);
});