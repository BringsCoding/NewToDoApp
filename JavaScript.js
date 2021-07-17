console.log("hello");

const arr = [];
const newlist = document.querySelector("#myUL");
const addbutton = document.querySelector("#addme-button");
const textfield = document.querySelector("#textfild");

addbutton.addEventListener("click", function () {
  const newtext = textfield.value;
  const newarray = { description: newtext, done: false };
  arr.push(newarray);
  textfield.value = "";
  ////JavasScript ^^^^^^^^////////

  const newli = document.createElement("li");
  newli.todoObj = newarray;
  const textNode = document.createTextNode(newtext);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.id = "checkboxen";
  checkbox.className = "check";
  let label = document.createElement("label");
  const todoid = newtext.trim().toLowerCase().replaceAll(" ", "-"); //Wandeln die ID um

  newli.appendChild(label);
  newli.appendChild(checkbox);
  label.append(textNode);
  newlist.appendChild(newli);
  label.setAttribute("for", todoid);
});

newlist.addEventListener("change", function (e) {
  const newDoneState = e.target.checked;
  const todoObj = e.target.parentElement.todoObj;
  todoObj.done = newDoneState;
});

const allfilter = document.querySelector("#button-open");
//in jedem i ein Objekt

allfilter.addEventListener("click", function () {
  for (let i = 0; i < newlist.children.length; i++) {
    const todoObj = newlist.children[i].todoObj;
    if (todoObj.done === false) {
      newlist.children[i].hidden = true;
    }
  }
});
