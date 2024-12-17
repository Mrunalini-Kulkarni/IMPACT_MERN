let parentElement = document.getElementById("parent")
// console.log(parentElement)

// let anchorElement = document.getElementsByClassName("anchor")
// console.log(anchorElement)

let anchorTag = document.getElementsByClassName("anchor")
let headerTag = document.getElementsByClassName("header")[0]
let button = document.getElementsByClassName("button")[0]
console.log(headerTag)
// console.log(document.getElementsByClassName("header")[0])

button.addEventListener("click",() => {
    document.getElementsByClassName("header")[0].style.backgroundColor = "lavender";
});
