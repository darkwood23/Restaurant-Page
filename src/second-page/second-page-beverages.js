function displayBeverages(contentHold, img1, img2) {
    const divBeverages = document.createElement("div")
    const title = document.createElement("h2")
    const bloodyMaria = document.createElement("div")
    const bloodyMariaDetails = document.createElement("p")
    const bloodyMariaPrice = document.createElement("h3")
    const bloodyMariaPic = new Image()
    const spicyPaloma = document.createElement("div")
    const spicyPalomaDetails = document.createElement("p")
    const spicyPalomaPic = new Image()
    const spicyPalomaPrice = document.createElement("h3")

    divBeverages.classList.add("beverages-holder")
    title.classList.add("beverages-title")
    bloodyMaria.classList.add("beverages")
    spicyPaloma.classList.add("beverages")
    bloodyMaria.id = "bloody-maria"
    spicyPaloma.id = "spicy-paloma"

    title.textContent = "Beverages"

    bloodyMariaDetails.textContent = "When you switch from vodka to tequila, you transform the famous bloody mary into the equally tasty bloody maria. It's the same great drink, but the tequila background makes a big difference."
    bloodyMariaPic.src = img1
    bloodyMariaPrice.textContent = "Rs.300"

    spicyPalomaDetails.textContent = "Infusing liquor with chili peppers is a fun and slightly more subtle way to bring a little spice into cocktails."
    spicyPalomaPic.src = img2
    spicyPalomaPrice.textContent = "Rs.250"

    bloodyMaria.appendChild(bloodyMariaDetails)
    bloodyMaria.appendChild(bloodyMariaPic)
    bloodyMaria.appendChild(bloodyMariaPrice)
    spicyPaloma.appendChild(spicyPalomaDetails)
    spicyPaloma.appendChild(spicyPalomaPic)
    spicyPaloma.appendChild(spicyPalomaPrice)
    divBeverages.appendChild(title)
    divBeverages.appendChild(bloodyMaria)
    divBeverages.appendChild(spicyPaloma)
    contentHold.appendChild(divBeverages)
}

export {displayBeverages}