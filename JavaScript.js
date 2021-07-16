console.log("hello");

let button = document.querySelector("#addme");
let textfild = document.querySelector("#textfild");

let checkbox = document.createElement("input");

button.addEventListener("click", function () {
  let ul = document.querySelector("#myUL"); //ul
  let lia = document.querySelector("#li-element");
  //let li = document.createElement("li"); //li
  let paragraph = document.createElement("p");
  let pa = document.querySelector("p");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.id = "checkboxen";
  checkbox.className = "check";

  //paragraph.classList.add("paragraph-styling");
  paragraph.innerText = textfild.value;
  textfild.value = "";
  //li.appendChild(document.createTextNode(text.value));
  lia.appendChild(checkbox);
  lia.appendChild(paragraph);

  /////////////////////////////////////////////////////
  checkbox.addEventListener("change", function (event) {
    const checkbox = event.target;
    const checked = checkbox.checked;
    let pa = checkbox.parentNode.parentNode;
    if (checked) {
      paragraph.id = "responded";
    } else {
      paragraph.id = "";
    }
  });
});

let list = document.getElementsByClassName("responded");
for (var i = 0; i < list.length; i++) {
  list[i].parentNode.removeChild(list[i]);
  console.log(list);
}

//let text = document.querySelector("#textfild");
//li.appendChild(document.createTextNode(text.value));
//li.appendChild(document.createTextNode(textfild.value));
//ul.appendChild(li);
