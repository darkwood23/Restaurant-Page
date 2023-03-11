import {displayTitle} from'./first-page/first-page-title'
import {displaySaying} from './first-page/first-page-saying'
import {displayHours} from './first-page/first-page-hours'
import { displayLocation } from './first-page/first-page-location'
import chilliPic from './chilli.jpeg'

function displayHome() {
    const contentHolder = document.getElementById('page')
    const selectTab = document.querySelector(".home-button")
    const image = chilliPic

    selectTab.style = "background-color: green; color: white; border: 1px solid green;"

    displayTitle(contentHolder, image)
    displaySaying(contentHolder)
    displayHours(contentHolder)
    displayLocation(contentHolder)
}

export {displayHome}