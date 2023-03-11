import { displayHome } from "./display-first-page"
import { displayMenu } from "./display-second-page"
import { displayContacts } from "./display-third-page"

function displayTab(contentHolder) {
    const tab = document.createElement("div")
    const buttonOne = document.createElement("button")
    const buttonTwo = document.createElement("button")
    const buttonThree = document.createElement("button")

    tab.classList.add("tab")
    buttonOne.classList.add("home-button")
    buttonTwo.classList.add("menu-button")
    buttonThree.classList.add("contact-button")
    
    buttonOne.textContent = "Home"
    buttonTwo.textContent = "Menu"
    buttonThree.textContent = "Contact"

    tab.appendChild(buttonOne)
    tab.appendChild(buttonTwo)
    tab.appendChild(buttonThree)
    contentHolder.appendChild(tab)
}

export {displayTab}