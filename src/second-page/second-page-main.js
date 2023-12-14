function displayMain(contentHold, img1, img2, img3, img4) {
    const divMain = document.createElement("div")
    const mainTitle = document.createElement("h2")

    const tortellini = document.createElement("div")
    const tortelliniName = document.createElement("h4")
    const tortelliniDetails = document.createElement("p")
    const tortelliniPic = new Image()
    const tortelliniPrice = document.createElement("h3")

    const cauliFlower = document.createElement("div")
    const cauliFlowerName = document.createElement("h4")
    const cauliFlowerDetails = document.createElement("p")
    const cauliFlowerPic = new Image()
    const cauliFlowerPrice = document.createElement("h3")

    const potato = document.createElement("div")
    const potatoName = document.createElement("h4")
    const potatoDetails = document.createElement("p")
    const potatoPic = new Image()
    const potatoPrice = document.createElement("h3")

    const skewers = document.createElement("div")
    const skewersName = document.createElement("h4")
    const skewersDetails = document.createElement("p")
    const skewersPic = new Image()
    const skewersPrice = document.createElement("h3")

    divMain.id = "div-main"
    mainTitle.classList.add("items-title")
    tortellini.classList.add("items")
    potato.classList.add("items")
    skewers.classList.add("items")
    cauliFlower.classList.add("items")
    mainTitle.textContent = "Main Dishes"

    skewersName.classList.add("titles")
    potatoName.classList.add("titles")
    cauliFlowerName.classList.add("titles")
    tortelliniName.classList.add("titles")

    tortelliniName.textContent = "Spicy Tomato Mushroom Tortellini"
    tortelliniDetails.textContent = "The spiciest tortellini you've ever had"
    tortelliniPic.src = img1
    tortelliniPrice.textContent = "Rs.150"

    cauliFlowerName.textContent = "Spicy Cauliflower"
    cauliFlowerDetails.textContent = "Have you ever had spicy cauliflowers? Now you do!"
    cauliFlowerPic.src = img2
    cauliFlowerPrice.textContent = "Rs.200"

    potatoName.textContent = "Spicy Baked Potatos"
    potatoDetails.textContent = "Potatoes with a little bit of spice is the best way to have potatoes"
    potatoPic.src = img3
    potatoPrice.textContent = "Rs.100"

    skewersName.textContent = "Spicy Chicken Skewers with Sun-Dried Tomato Sauce"
    skewersDetails.textContent = "Spicy chicken is the most irrestable food in the world!"
    skewersPic.src = img4
    skewersPrice.textContent = "Rs.200"

    divMain.appendChild(mainTitle)
    divMain.appendChild(tortellini)
    divMain.appendChild(cauliFlower)
    divMain.appendChild(potato)
    divMain.appendChild(skewers)

    tortellini.appendChild(tortelliniName)
    tortellini.appendChild(tortelliniDetails)
    tortellini.appendChild(tortelliniPic)
    tortellini.appendChild(tortelliniPrice)

    cauliFlower.appendChild(cauliFlowerName)
    cauliFlower.appendChild(cauliFlowerDetails)
    cauliFlower.appendChild(cauliFlowerPic)
    cauliFlower.appendChild(cauliFlowerPrice)

    potato.appendChild(potatoName)
    potato.appendChild(potatoDetails)
    potato.appendChild(potatoPic)
    potato.appendChild(potatoPrice)

    skewers.appendChild(skewersName)
    skewers.appendChild(skewersDetails)
    skewers.appendChild(skewersPic)
    skewers.appendChild(skewersPrice)

    contentHold.appendChild(divMain)
}

export { displayMain }