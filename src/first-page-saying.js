function displaySaying() {
    const contentHolder = document.getElementById('content')

    const saying = document.createElement('div')
    const sayer = document.createElement('h3')
    const tagLine = document.createElement('p')

    saying.classList.add("saying")
    tagLine.textContent = "Red Chilli is the best place to have something spicy, wether it be breakfast, lunch or dinner. This is the exact place you would want to be in, from the customer service to the food itself, everthing is just better."
    sayer.textContent = "-Gordon Ramsey"

    saying.appendChild(tagLine)
    saying.appendChild(sayer)
    contentHolder.appendChild(saying)
}

export {displaySaying}