const todoInput = document.querySelector(".todo-input");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

const arr = [];
btn.addEventListener("click", () => {
  const input = todoInput.value;
  if (input.includes("must")) {
    arr.unshift(`<li>${input}</li>`);
  } else {
    arr.push(`<li>${input}</li>`);
  }
  container.innerHTML = arr.join("");
  console.log(input);
});
