function displayLocation() {
    const contentHolder = document.getElementById('content')

    const locationHolder = document.createElement('div')
    const title = document.createElement('h2')
    const address = document.createElement('p')

    locationHolder.classList.add('location')
    title.textContent = "Location"
    address.textContent = "777 Hilly Road, Kathmandu, Nepal"

    locationHolder.appendChild(title)
    locationHolder.appendChild(address)
    contentHolder.appendChild(locationHolder)
}

export {displayLocation}