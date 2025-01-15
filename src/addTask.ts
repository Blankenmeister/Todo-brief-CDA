let addTask: HTMLElement | null = document.querySelector(".addTask");

addTask?.addEventListener("click", () => {
  let todo1: HTMLElement | null = document.querySelector("#todo1");

  console.log(todo1.value);

  let todo_list: HTMLElement | null = document.querySelector(".todo-list");

  if (todo_list) {
    todo_list.innerHTML =
      ` <div class="task">
            <p>` +
      todo1.value +
      `</p>
            <input type="checkbox" />
          </div>`;
  }
});
