import { displayTitleSecond } from "./second-page/second-page-title"
import { displayBeverages } from "./second-page/second-page-beverages"
import { displaySides } from "./second-page/second-page-sides"
import { displayMain } from "./second-page/second-page-main"
import bloodyMaria from '../src/second-page/images/Bloody-Maria.jpeg'
import spicyPaloma from "../src/second-page/images/SpicyPaloma.jpeg"
import chickenNuggets from "../src/second-page/images/chicken-nuggets.jpg"
import cornKabobs from "../src/second-page/images/corn-kabobs.jpg"
import nachos from "../src/second-page/images/nachos.jpg"
import Spicycauliflower from "../src/second-page/images/cauliflower.jpeg"
import Spicymushroom from "../src/second-page/images/mushroom.jpeg"
import SpicyPotato from "../src/second-page/images/potato.jpeg"
import SpicySkewers from "../src/second-page/images/skewers.jpeg"

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
    const cauli = Spicycauliflower
    const mushroom = Spicymushroom
    const potato = SpicyPotato
    const skewers = SpicySkewers

    homeButton.style = ""
    contactButton.style = ""
    menuButton.style = "color: white; background-color: green; border: 2px solid green;"

    contentHold.textContent = ""
    displayTitleSecond(contentHold)
    displayBeverages(contentHold, img1, img2)
    displaySides(contentHold, corn, nac, chicken)
    displayMain(contentHold, mushroom, cauli, potato, skewers)
}

export {displayMenu}