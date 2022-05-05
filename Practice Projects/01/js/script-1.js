console.log("welcome to js practice");
let ap = {
    name: "aman",
    sex: "male", class: "B.Sc. - 3rd"
};
ap = [12, 4584, 154, 5485];

// console.log(ap);

// ap.forEach(function (x, y, z){
//     console.log(x, y, z);
// });

let allbody = document.querySelector("body");
console.log(allbody.children);

let element = document.createElement("h1");
let aLink = document.createElement("a");
let textnode = document.createTextNode("Go TO CWH");

aLink.setAttribute("href", "//codewithharry.com/");
allbody.append(aLink);
element.append(textnode);
element.className = "heading";
element.id = "mainHeading";
element.setAttribute("title", "this is a heading");
allbody.append(element);





console.log(element,"aLink");
// for (let key in ap)
// {
//     console.log(`on index ${key} is ${ap[key]}`);
// } 
