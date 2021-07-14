console.log("hello");

let button = document.querySelector("#addme");
let textfild = document.querySelector("#textfild");

let checkbox = document.createElement("input");

button.addEventListener("click", function () {
  let ul = document.querySelector("#myUL"); //ul
  let li = document.createElement("li"); //li
  let p = document.createElement("p");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.id = "checkboxen";

  li.appendChild(checkbox);

  let text = document.querySelector("#textfild");
  p.innerText = text.value;
  li.appendChild(document.createTextNode(text.value));

  ul.appendChild(li);
});
