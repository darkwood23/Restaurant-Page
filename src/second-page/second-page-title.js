function displayTitleSecond(contentHold) {
    const title = document.createElement("h1")

    title.classList.add("menu-title")
    title.textContent = "Menu"

    contentHold.appendChild(title)
}

export {displayTitleSecond}