const todoInput = document.querySelector(".todo-input");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

let i = 0;

btn.addEventListener("click", () => {
  let div = document.createElement("div");
  let btnn = document.createElement("button");
  btnn.textContent = "X";
  div.textContent = todoInput.value + i++;
  div.append(btnn);
  container.append(div);
  btnn.addEventListener("click", () => {
    div.remove();
  });
});
