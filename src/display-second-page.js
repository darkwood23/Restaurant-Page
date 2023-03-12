import { displayTitleSecond } from "./second-page/second-page-title"
import { displayBeverages } from "./second-page/second-page-beverages"
import bloodyMaria from '/home/anonymous/repos/Restaurant-Page/src/second-page/images/Bloody-Maria.jpeg'
import spicyPaloma from "/home/anonymous/repos/Restaurant-Page/src/second-page/images/SpicyPaloma.jpeg"

function displayMenu() {
    const contentHold = document.getElementById("page")
    const menuButton = document.querySelector(".menu-button")
    const homeButton = document.querySelector(".home-button")
    const contactButton = document.querySelector(".contact-button")
    const img1 = bloodyMaria
    const img2 = spicyPaloma

    homeButton.style = ""
    contactButton.style = ""
    menuButton.style = "color: white; background-color: green; border: 2px solid green;"

    contentHold.textContent = ""
    displayTitleSecond(contentHold)
    displayBeverages(contentHold, img1, img2)
}

export {displayMenu}