// let parent = document.querySelector(".parent")


// let childElement = document.createElement("h1")

// childElement.textContent = "I have been appended with the help of JavaScript"

// childElement.classList.add("child")
// // childElement.classList.toggle("child")


// parent.appendChild(childElement)

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click", () => {
//     setTimeout(() => {
//         h1.textContent = "Button has been clicked"
//     }, 1000)
// })

let first = setTimeout(() => {
    console.log("This is first")
}, 1000)
let second = setTimeout(() => {
    console.log("This is second")
}, 2000)
let third = setTimeout(() => {
    console.log("This is third")
}, 3000)

clearTimeout(second);