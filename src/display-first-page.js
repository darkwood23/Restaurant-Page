import {displayTitle} from'./first-page-title'
import {displaySaying} from './first-page-saying'
import {displayHours} from './first-page-hours'
import { displayLocation } from './first-page-location'
import chilliPic from './chilli.jpeg'

function displayHome() {
    const contentHolder = document.getElementById('content')
    const image = chilliPic

    displayTitle(contentHolder, image)
    displaySaying()
    displayHours()
    displayLocation()
}

export {displayHome}