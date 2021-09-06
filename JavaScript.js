let arr = [];

const newlist = document.querySelector("#myUL");
const addbutton = document.querySelector("#addme-button");
const textfield = document.querySelector("#textfild");
AddButton();
function AddButton() {
  addbutton.addEventListener("click", function () {
    const newtext = textfield.value;
    let newarray = { description: newtext, done: false };

    arr.push(newarray);
    textfield.value = "";
    ////JavasScript ^^^^^^^^////////
    //sendMe();
    //Bedigung damit mindestens 5 buschataben geschrieben werden
    if (newtext.length < 5) {
      alert("Ihr Text ist zu kurz, mindestens 5 Buschtaben");
      return;
    }

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

    newli.appendChild(checkbox);
    newli.appendChild(label);
    label.append(textNode);
    newlist.appendChild(newli);
    label.setAttribute("for", todoid);

    //JSON //////
    JSON.stringify(newarray);
    localStorage.setItem("list", JSON.stringify(newarray));
    //localStorage.getItem("list");

    if (localStorage.getItem("list")) {
      newarray = JSON.parse(localStorage.getItem("list"));
    } else {
      newarray = [];
    }

    //Funktionen für den Filter
    ButtonAll();
    ButtonOpen();
    ButtonDone();
  });
}

newlist.addEventListener("change", function (e) {
  const newDoneState = e.target.checked;
  const todoObj = e.target.parentElement.todoObj;
  todoObj.done = newDoneState;
});

//Filter All
function ButtonAll() {
  const filterAll = document.querySelector("#all");
  filterAll.addEventListener("click", function () {
    for (let i = 0; i < newlist.children.length; i++) {
      newlist.children[i].hidden = false;
    }
  });
}

//Filter Open mit if/else
function ButtonOpen() {
  const openfilter = document.querySelector("#button-open");
  //in jedem i ein Objekt

  openfilter.addEventListener("click", function () {
    for (let i = 0; i < newlist.children.length; i++) {
      const todoObj = newlist.children[i].todoObj;
      if (todoObj.done === true) {
        newlist.children[i].hidden = true;
      } else {
        newlist.children[i].hidden = false;
        todoObj.done === false;
      }
    }
  });
}

//Filter Done mit if/else
function ButtonDone() {
  const donefilter = document.querySelector("#button-done");
  //in jedem i ein Objekt

  donefilter.addEventListener("click", function () {
    for (let i = 0; i < newlist.children.length; i++) {
      const todoObj = newlist.children[i].todoObj;
      if (todoObj.done === false) {
        newlist.children[i].hidden = true;
      } else {
        newlist.children[i].hidden = false;
        todoObj.done === true;
      }
    }
  });
}

const remove = document.querySelector("#remove-button");
remove.addEventListener("click", function () {
  newlist.innerHTML = "";
  arr.length = 0;
  window.localStorage.clear();
});

function success() {
  if (document.getElementById("textfild").value === "") {
    document.getElementById("addme-button").disabled = true;
  } else {
    document.getElementById("addme-button").disabled = false;
  }
}

//Fetch//TEST

test();
function test() {
  const ButtonFetch = document.querySelector("#fetch");
  ButtonFetch.addEventListener("click", function () {
    fetch("http://localhost:4730/todos/69", {
      method: "DELETE",
    });
  });
}
/////////////////////////////////
