import { displayHome } from './display-first-page'
import { displayContacts } from './display-third-page'
import { displayMenu } from './display-second-page'
import { displayTab } from './display-tab'
import './style.css'

const tabHolder = document.getElementById("content")

displayTab(tabHolder)
displayHome()