import {displayTitle} from'./first-page/first-page-title'
import {displaySaying} from './first-page/first-page-saying'
import {displayHours} from './first-page/first-page-hours'
import { displayLocation } from './first-page/first-page-location'
import chilliPic from './chilli.jpeg'

function displayHome() {
    const contentHolder = document.getElementById('page')
    const homeButton = document.querySelector(".home-button")
    const menuButton = document.querySelector(".menu-button")
    const contactButton = document.querySelector(".contact-button")
    const image = chilliPic

    menuButton.style = ""
    contactButton.style = ""
    homeButton.style = "background-color: green; color: white; border: 1px solid green;"

    contentHolder.textContent = ""
    displayTitle(contentHolder, image)
    displaySaying(contentHolder)
    displayHours(contentHolder)
    displayLocation(contentHolder)
}

export {displayHome}