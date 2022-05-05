showNotes();
importanceCheck();

let addBtn = document.getElementById("addBtn");
let srchBox = document.getElementById("srchBox");
let impChkBox = document.getElementById("impChkBox");
let inputTitle = document.getElementById("inputTitle"),
  inputTxt = document.getElementById("inputTxt");

addBtn.addEventListener("click", addNote);

function addNote() {
  if (inputTitle.value != "" && inputTxt.value != "") {
    let LH_Notes = window.localStorage.getItem("notes"),
      myObj,
      myNote;

    if (LH_Notes == null) {
      myObj = [];
    } else {
      myObj = JSON.parse(LH_Notes);
    }

    myNote = [inputTitle.value, inputTxt.value];
    myObj.push(myNote);
    window.localStorage.setItem("notes", JSON.stringify(myObj));
    inputTitle.value = inputTxt.value = "";
  }
  showNotes();
  importanceCheck();
}

function showNotes() {
  let noteCards = document.getElementById("noteCards");
  let LH_Notes = window.localStorage.getItem("notes"),
    myObj;

  if (LH_Notes == null) {
    myObj = [];
  } else {
    myObj = JSON.parse(LH_Notes);
  }
  htmlVal = "";
  myObj.forEach(function (element, index) {
    htmlVal += `<div class="card" id="card_${index}">
        <h3 class="titletxt">${myObj[index][0]}</h3><hr>
        <p class="mainTxt">${myObj[index][1]}</p>
        <p><button type="button" class="delBtn btn aCntr" id="${index}" onclick="delNote(this.id)" >Delete Note</button>
        <input type="checkbox" name="impChkBox" class="impChkBox" id="impChkBox" onclick="importanceCheck()" ></p>
    </div>`;
  });
  if (myObj.length > 0) {
    noteCards.innerHTML = htmlVal;
  } else {
    noteCards.innerHTML = "You have't added any Notes...";
  }

  // if (impChkBox.value == true) {
  //     return true;
  // } else {
  //     return true;
  // }
}

function delNote(index) {
  let LH_Notes = window.localStorage.getItem("notes"),
    myObj;

  if (LH_Notes == null) {
    myObj = [];
  } else {
    myObj = JSON.parse(LH_Notes);
  }
  // console.log("deleting", index);
  myObj.splice(index, 1);
  window.localStorage.setItem("notes", JSON.stringify(myObj));
  showNotes();
  importanceCheck();
}

srchBox.addEventListener("input", function () {
  let srchTxt = srchBox.value.toLowerCase();
  let card = document.getElementsByClassName("card");
  Array.from(card).forEach(function (element) {
    let cardTxt_Title = element.getElementsByTagName("h3")[0].innerText;
    let cardTxt_Text = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt_Text.includes(srchTxt) || cardTxt_Title.includes(srchTxt)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});


//     element.style = "border: 2px solid red";



function importanceCheck(){
  let impNoteCheck = localStorage.getItem("impNote"),
    impNoteObj;
  if (impNoteCheck == null) {
    impNoteObj = [];
} else {
    impNoteObj = JSON.parse(impNoteCheck);
    console.log(impNoteObj,"sflmxblkfdnlknl");
  }
  let card = document.getElementsByClassName("card");
  Array.from(card).forEach(function (element, index) {
      let impCheck = element.getElementById("impChkBox");
      if (impCheck.value == true){
        element.style = "border: 2px solid red";
        impNoteObj.push(impCheck);
        localStorage.setItem("impNote","impNoteObj");
      }
  });
}
