import { displayTitleSecond } from "./second-page/second-page-title"
import { displayBeverages } from "./second-page/second-page-beverages"
import { displaySides } from "./second-page/second-page-sides"
import bloodyMaria from '/home/anonymous/repos/Restaurant-Page/src/second-page/images/Bloody-Maria.jpeg'
import spicyPaloma from "/home/anonymous/repos/Restaurant-Page/src/second-page/images/SpicyPaloma.jpeg"
import chickenNuggets from "/home/anonymous/repos/Restaurant-Page/src/second-page/images/chicken-nuggets.jpg"
import cornKabobs from "/home/anonymous/repos/Restaurant-Page/src/second-page/images/corn-kabobs.jpg"
import nachos from "/home/anonymous/repos/Restaurant-Page/src/second-page/images/nachos.jpg"

function displayMenu() {
    const contentHold = document.getElementById("page")
    const menuButton = document.querySelector(".menu-button")
    const homeButton = document.querySelector(".home-button")
    const contactButton = document.querySelector(".contact-button")
    const img1 = bloodyMaria
    const img2 = spicyPaloma
    const chicken = chickenNuggets
    const corn = cornKabobs
    const nac = nachos

    homeButton.style = ""
    contactButton.style = ""
    menuButton.style = "color: white; background-color: green; border: 2px solid green;"

    contentHold.textContent = ""
    displayTitleSecond(contentHold)
    displayBeverages(contentHold, img1, img2)
    displaySides(contentHold, corn, nac, chicken)
}

export {displayMenu}