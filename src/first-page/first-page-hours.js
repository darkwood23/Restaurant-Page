function displayHours(contentHolder) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Firday",
        "Saturday"
    ]
    const workingHours = [
        "8am - 9pm",
        "6am - 7pm",
        "6am - 8pm",
        "7am - 8pm",
        "6am - 7pm",
        "6am - 11pm",
        "6am - 12pm"
    ]

    const hoursHolder = document.createElement('div')
    const headingTwo = document.createElement('h2')
    const ul = document.createElement('ul')

    hoursHolder.classList.add('hours')
    headingTwo.textContent = "Hours"

    hoursHolder.appendChild(headingTwo)
    hoursHolder.appendChild(ul)
    
    for(let i = 0; i < days.length; i++) {
        let li = document.createElement('li')
        
        li.classList.add("list" + i)

        li.textContent = days[i] + ": " +workingHours[i]

        ul.appendChild(li)
    }

    contentHolder.appendChild(hoursHolder)
}

export {displayHours}