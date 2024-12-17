let toggle = 0;
document.getElementById("button").addEventListener("click", function() {
    if (toggle === 0) {
        document.getElementById("parent").style.backgroundColor = "pink";
        document.querySelector("body").style.backgroundColor = "lavender";
        document.getElementById("button").style.backgroundColor = "lightblue";
        toggle = 1;
    } else {
        document.getElementById("parent").style.backgroundColor = "grey";
        document.querySelector("body").style.backgroundColor = "black";
        document.getElementById("button").style.backgroundColor = "whitesmoke";
        toggle = 0;
    }
});