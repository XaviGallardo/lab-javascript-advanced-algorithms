// Basic Structure

// let titleH1 = document.getElementsByTagName("h1")[0];
// console.log("TCL: titleH1", titleH1);

// let h2Tag = document.createElement(`h2`);
// console.log("TCL: h2Tag", h2Tag);
// h2Tag.innerHTML = "Stack";

// titleH1.appendChild(h2Tag);

// REFACTOR BASIC STRUCTURE

// window.onload = function() {
console.log("Hello world");
let stack = new StackDataStructure();
console.log("TCL: window.onload -> stack", stack);
createStackControl();
createStackVisual();
// };

function createStackControl() {
  // const body = document.getElementById("body");
  const container = document.querySelector(".container");
  console.log("TCL: createStack -> container", container);
  const div = document.createElement("div");

  div.innerHTML = `
     <h2 id="title2" class="title2">Stack</h2>
      <input type="text" placeholder="Add the element to the stack..." class="input--Text">
      <p id="elementTaked"> </p>
      <button id="bt--add">ADD</button>
      <button id="bt--take">TAKE</button>
      <div id="stacks"></div>
    `;

  //   div.innerHTML += `<li>hola</li>`;

  const buttonAdd = div.querySelector("#bt--add");
  // button.addEventListener("click", onClick()); OJO que se ejecuta onClick
  buttonAdd.addEventListener("click", onClick);

  const buttonTake = div.querySelector("#bt--take");
  buttonTake.addEventListener("click", takeElement);

  container.appendChild(div);
  //   createStackVisual();
  console.log("TCL: window.onload -> stack", stack);
}

function createStackVisual() {
  //   const stack = new StackDataStructure();
  const list = document.getElementById("list");
  const elementsStack = stack.MAX_SIZE;
  console.log("TCL: createStackVisual -> elementsStack", elementsStack);

  const divElementsStack = document.createElement("div");
  for (let i = 0; i < elementsStack; i++) {
    const element = document.createElement("div");
    // let elementContent = stack.stackControl[i];
    // console.log("TCL: createStackVisual -> elementContent", elementContent);
    // if (typeof elementContent === "undefined") {
    //   console.log("the property is not available...");
    //   //   stack.stackControl[i] = `${i + 1}`;

    //   console.log(
    //     "TCL: createStackVisual -> stack.stackControl[i] ",
    //     stack.stackControl[i]
    //   );
    // }
    element.innerHTML = `
                <div class="stack--element"> ${i + 1}</div>
                `;

    const div = document.getElementById("stacks");
    div.prepend(element);
  }
}

function onClick() {
  const input = document.querySelector("input");
  console.log("TCL: onClick -> input", input.value);
  const pushResult = stack.push(input.value);
  console.log("TCL: onClick -> pushResult", pushResult);
  console.log("TCL: onClick -> stack", stack.stackControl);

  const isStOver = document.getElementById("stOver");
  console.log("TCL: onClick -> isStOver", isStOver);

  if (pushResult === "Stack Overflow" && isStOver === null) {
    const stackOverflow = document.createElement("div");
    stackOverflow.id = "stOver";
    // stackOverflow.classList.add("stOver");
    stackOverflow.className = "stOver";
    stackOverflow.innerHTML = `
       Stack Overflow
      `;
    const div = document.getElementById("stacks");
    div.prepend(stackOverflow);
  }
  const isStUnder = document.getElementById("stUnder");
  if (isStUnder !== null) {
    isStUnder.remove();
  }

  insertElementStack();
  document.getElementById("elementTaked").innerText = ``;
  input.value = "";
}

function insertElementStack() {
  const elementToChange = stack.stackControl.length;
  console.log("TCL: insertElementStack -> elementToChange", elementToChange);
  const elements = document.getElementsByClassName("stack--element");
  console.log("TCL: insertElementStack -> elements", elements[0]);
  elements[stack.MAX_SIZE - elementToChange].innerHTML = `${
    stack.stackControl[elementToChange - 1]
  }`;
  //   console.log(" Que es ", elements[stack.MAX_SIZE - elementToChange]);
  elements[stack.MAX_SIZE - elementToChange].classList.add("active");

  console.log(
    "TCL: insertElementStack -> ${stack.stackControl[stack]}",
    stack.stackControl[0]
  );
}
function quitElementStack() {
  const isStOver = document.getElementById("stOver");
  console.log("TCL: quitElementStack -> isStOver", isStOver);
  if (isStOver !== null) {
    isStOver.remove();
  }
  const elementToChange = stack.stackControl.length + 1;
  console.log("TCL: quitElementStack -> elementToChange", elementToChange);
  const elements = document.getElementsByClassName("stack--element");
  elements[stack.MAX_SIZE - elementToChange].innerHTML = `${elementToChange}`;
  console.log(
    "TCL: quitElementStack -> elements[stack.MAX_SIZE - elementToChange].",
    elements[stack.MAX_SIZE - elementToChange]
  );
  elements[stack.MAX_SIZE - elementToChange].classList.remove("active");
}
function takeElement() {
  const isStUnder = document.getElementById("stUnder");
  const popResult = stack.pop();
  console.log("TCL: takeElement -> popResult", popResult);
  if (popResult === "Stack Underflow" && isStUnder === null) {
    const stackUnderflow = document.createElement("div");
    stackUnderflow.id = "stUnder";
    stackUnderflow.className = "stUnder";
    stackUnderflow.innerHTML = `Stack Underflow`;
    const div = document.getElementById("stacks");
    div.appendChild(stackUnderflow);
  }
  if (popResult !== "Stack Underflow") {
    document.getElementById("elementTaked").innerText = `${popResult}`;
  } else {
    document.getElementById("elementTaked").innerText = ``;
  }

  quitElementStack();
}
// function onClick() {
//   const input = document.querySelector("input");
//   // console.log(input.value);
//   const ul = document.getElementById("list");

//   // ul.innerHTML = `
//   //   <li> ${input.value} </li>
//   // `;

//   const li = document.createElement("li");
//   // li.innerText = input.value;
//   li.innerHTML = `
//       ${input.value} <button>Delete</button>
//     `;

//   const button = li.querySelector("button");

//   ul.appendChild(li);

//   button.addEventListener("click", onDelete);

//   input.value = "";
// }

function onDelete(e) {
  const toDelete = e.target.parentNode;
  // console.log("deleted... ", e.target.parentNode);
  const ul = document.querySelector("#list");

  ul.removeChild(toDelete);
}
