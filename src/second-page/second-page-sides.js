function displaySides(contentHold, img1, img2, img3) {
    const divSides = document.createElement("div")
    const divSidesTitle = document.createElement("h2")

    const cornKabobs = document.createElement("div")
    const cornKabobsName = document.createElement("h4")
    const cornKabobsContent = document.createElement("p")
    const cornKabobsImage = new Image()
    const cornKabobsPrice = document.createElement("h3")

    const nachoBake = document.createElement("div")
    const nachoBakeName = document.createElement("h4")
    const nachoBakeContent = document.createElement('p')
    const nachoBakeImage = new Image()
    const nachoBakePrice = document.createElement("h3")

    const chickenNuggets = document.createElement("div")
    const chickenNuggetsName = document.createElement("h4")
    const chickenNuggetsContent = document.createElement("p")
    const chickenNuggetsImage = new Image()
    const chickenNuggetsPrice = document.createElement("h3")

    cornKabobs.classList.add("items")
    divSides.id = "div-sides"
    nachoBake.classList.add("items")
    chickenNuggets.classList.add("items")
    divSidesTitle.classList.add("items-title")

    cornKabobsName.classList.add("titles")
    chickenNuggetsName.classList.add("titles")
    nachoBakeName.classList.add("titles")

    divSidesTitle.textContent = "Sides"
    cornKabobsName.textContent = "Spicy Corn Kabobs"
    nachoBakeName.textContent = "Spicy Nacho Bake"
    chickenNuggetsName.textContent = "Spicy Chicken Nuggets"

    cornKabobsImage.src = img1
    nachoBakeImage.src = img2
    chickenNuggetsImage.src = img3

    cornKabobsContent.textContent = "Corn transforms from so-so kernels to tangy sensation when grilled, dotted with sour cream and cheese and zinged with a splash of lime. "
    nachoBakeContent.textContent = "How can you go without trying the most delicious spicy nachos?"
    chickenNuggetsContent.textContent = "The best chicken in the world is now available!"

    cornKabobsPrice.textContent = "Rs.100"
    nachoBakePrice.textContent = "Rs.150"
    chickenNuggetsPrice.textContent = "Rs.200"

    cornKabobs.appendChild(cornKabobsName)
    cornKabobs.appendChild(cornKabobsContent)
    cornKabobs.appendChild(cornKabobsImage)
    cornKabobs.appendChild(cornKabobsPrice)

    nachoBake.appendChild(nachoBakeName)
    nachoBake.appendChild(nachoBakeContent)
    nachoBake.appendChild(nachoBakeImage)
    nachoBake.appendChild(nachoBakePrice)

    chickenNuggets.appendChild(chickenNuggetsName)
    chickenNuggets.appendChild(chickenNuggetsContent)
    chickenNuggets.appendChild(chickenNuggetsImage)
    chickenNuggets.appendChild(chickenNuggetsPrice)

    divSides.appendChild(divSidesTitle)
    divSides.appendChild(cornKabobs)
    divSides.appendChild(nachoBake)
    divSides.appendChild(chickenNuggets)

    contentHold.appendChild(divSides)
}

export { displaySides }