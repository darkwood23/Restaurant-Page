function displayTitle(contentHolder, image) {
    const header = document.createElement('div')
    const heading = document.createElement('h1')
    const img = new Image()

    header.classList.add("header")
    img.src = image
    img.classList.add("chilli-image")
    heading.textContent = "Red Chilli"

    header.appendChild(img)
    header.appendChild(heading)
    contentHolder.appendChild(header)
}

export {displayTitle}