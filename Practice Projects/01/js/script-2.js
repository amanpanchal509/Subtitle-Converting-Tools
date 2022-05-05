let allBody = document.querySelector("body");
let myDiv = document.createElement("div");

myDiv.addEventListener("click", function () {
    myTxtArea = document.createElement("textarea");
    myTxtArea.className="myTxt";
    
    allBody.replaceChild(myTxtArea,myDiv);
    myTA = document.getElementById("mytxt");

    myTxtArea.addEventListener("blur", function () {
        console.log(myTA);
        allBody.replaceChild(myDiv,myTxtArea);
    })
}


);

myDiv.className="edtbleDiv";
myDiv.style.backgroundColor = "red";
myDiv.style.border = "5px solid black";
myDiv.style.height = "400px";



allBody.append(myDiv);