const createElement = document.querySelector(".header button")
const form = document.querySelector(".form")
const closeBtn = document.querySelector(".form button")
const removeBtn = document.querySelector(".header img")
const table = document.querySelector(".elements")

createElement.addEventListener('click', function() {
    form.style.display = 'block'
})

closeBtn.addEventListener('click', function() {
    form.style.display = 'none'
})

document.querySelector("#submit").addEventListener('mouseup', function() {
    form.style.display = 'none'
    let newElement = document.createElement("div")
    newElement.className = 'Element'
    newElement.style.width = document.querySelector("#width").value + "px"
    newElement.style.height = document.querySelector("#height").value + "px"
    newElement.style.backgroundColor = document.querySelector("#bgColor").value
    newElement.style.borderWidth = document.querySelector("#borderSize").value + 'px'
    newElement.style.borderRadius = document.querySelector("#rounding").value + 'px'
    table.append(newElement)
})

removeBtn.addEventListener('click', function() {
    table.lastChild.remove()
})
