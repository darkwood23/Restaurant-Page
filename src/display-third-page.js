import gordonImage from "/home/anonymous/repos/Restaurant-Page/src/gordon.jpg"

function displayContacts() {
    const contentHold = document.getElementById("page")
    const menuButton = document.querySelector(".menu-button")
    const homeButton = document.querySelector(".home-button")
    const contactButton = document.querySelector(".contact-button")

    homeButton.style = ""
    menuButton.style = ""
    contactButton.style = "color: white; background-color: green; border: 2px solid green;"

    contentHold.textContent = ""

    const contactDiv = document.createElement("div")
    const contactTitle = document.createElement("h1")

    const gordon = document.createElement("div")
    const gordonName = document.createElement("h3")
    const gordonAbout = document.createElement("p")
    const gordonPic = new Image()

    const restaurant = document.createElement("div")
    const restaurantName = document.createElement("h3")
    const contactNumber = document.createElement("h4")
    const email = document.createElement("h4")

    contactDiv.id = "contact-div"
    contactTitle.classList.add("contact-title")
    gordon.classList.add("items")
    restaurant.classList.add("items")

    contactTitle.textContent = "Contact Us"
    gordonName.textContent = "Gordon Ramsay"
    gordonAbout.textContent = "When you have Gordon Ramsay in the kitchen who else do you need?"
    gordonPic.src = gordonImage

    restaurantName.textContent = "Red Chilli"
    contactNumber.textContent = "777-777-777"
    email.textContent = "redChilli99@noreply.com"

    gordon.appendChild(gordonName)
    gordon.appendChild(gordonAbout)
    gordon.appendChild(gordonPic)

    restaurant.appendChild(restaurantName)
    restaurant.appendChild(contactNumber)
    restaurant.appendChild(email)

    contactDiv.appendChild(contactTitle)
    contactDiv.appendChild(gordon)
    contactDiv.appendChild(restaurant)
    contentHold.appendChild(contactDiv)
}

export {displayContacts}