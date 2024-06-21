let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"

    item.appendChild(span);
    ul.appendChild(item);
    inp.value = "";


})

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "LI") {
        event.target.classList.toggle("checked");
    }
    else if (event.target.nodeName == "SPAN") {
        event.target.parentElement.remove();
    }
})