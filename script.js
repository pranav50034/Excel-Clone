const tHeadRow = document.querySelector(".table-heading-row");
const tBody = document.querySelector(".table-body");

//Buttons
const cut = document.querySelector(".cut");
const copy = document.querySelector(".copy");
const paste = document.querySelector(".paste");
const bold = document.querySelector(".bold");
const italics = document.querySelector(".italics");
const underline = document.querySelector(".underline");
const left = document.querySelector(".left-align");
const center = document.querySelector(".center-align");
const right = document.querySelector(".right-align");

let currentCell;
const rows = 100;
const cols = 26;
let matrix = new Array(rows);

for (let i = 0; i < rows; i++) {
   matrix[i] = new Array(cols);
   for (let j = 0; j < cols; j++) {
      matrix[i][j] = {};
   }
}

function updateMatrix(currentCell) {
   let obj = {
      style: currentCell.style.cssText,
      text: currentCell.innerText,
      id: currentCell.id, // A1, A2, A3, B1,B2,B3
   };
   let id = currentCell.id.split("");
   let i = id[1] - 1;
   let j = id[0].charCodeAt(0) - 65;
   matrix[i][j] = obj;
}

// Adding Cells into the Table

for (let i = 65; i <= 90; i++) {
   let th = document.createElement("th");
   th.innerText = String.fromCharCode(i);
   tHeadRow.append(th);
}

for (let i = 1; i <= 100; i++) {
   let tr = document.createElement("tr");
   let th = document.createElement("th");
   th.innerText = i;
   tr.appendChild(th);
   for (let j = 1; j <= 26; j++) {
      let td = document.createElement("td");
      td.setAttribute("contenteditable", "true");
      td.setAttribute("id", `${String.fromCharCode(j + 64)}${i}`);
      tr.appendChild(td);
      td.addEventListener("focus", (event) => onFocusFunction(event));
      td.addEventListener("input", (event) => onInputFunction(event));
   }
   tBody.appendChild(tr);
}

function onInputFunction(event) {
   updateMatrix(event.target);
}

function onFocusFunction(event) {
   currentCell = event.target;
   document.querySelector(".cellId").innerText = `${currentCell.id}`;
}

// Functionality
cut.addEventListener("click", () => {});

copy.addEventListener("click", () => {});

paste.addEventListener("click", () => {});

bold.addEventListener("click", () => {
   if (currentCell.style.fontWeight == "bold") {
      currentCell.style.fontWeight = "normal";
   } else currentCell.style.fontWeight = "bold";

   updateMatrix(currentCell);
});

italics.addEventListener("click", () => {
   if (currentCell.style.fontStyle == "italic") {
      currentCell.style.fontStyle = "normal";
   } else currentCell.style.fontStyle = "italic";

   ///// I need to pass updated currentCell inside updateMatrix;
   updateMatrix(currentCell);
});

underline.addEventListener("click", () => {
   if (currentCell.style.textDecoration == "underline") {
      currentCell.style.textDecoration = "none";
   } else currentCell.style.textDecoration = "underline";

   ///// I need to pass updated currentCell inside updateMatrix;
   updateMatrix(currentCell);
});

left.addEventListener("click", () => {});

center.addEventListener("click", () => {});

right.addEventListener("click", () => {});
