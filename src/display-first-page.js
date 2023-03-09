function displayHome(holder, image) {
    const contentHolder = holder

    const header = document.createElement('div')
    const saying = document.createElement('div')
    const heading = document.createElement('h1')
    const img = new Image()
    const tagLine = document.createElement('p')

    header.classList.add("header")
    saying.classList.add("saying")
    tagLine.textContent = "The best place to get something hot & spicy! Wether it is breakfast, lunch or dinner. -Gordon Ramsey"
    img.src = image
    img.classList.add("chilli-image")
    heading.textContent = "Red Chilli"

    header.appendChild(img)
    header.appendChild(heading)
    saying.appendChild(tagLine)
    contentHolder.appendChild(header)
    contentHolder.appendChild(saying)
}

export {displayHome}