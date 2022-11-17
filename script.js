const DOMSelectors = {
    input: document.getElementById("form"),
    artist: document.getElementById("artist"),
    title: document.getElementById("title"),
    url: document.getElementById("url"),
    addedDivs: document.getElementById("addedDivs")
}



DOMSelectors.input.addEventListener('submit', function addCard() {
    let chosenArtist = DOMSelectors.artist.value
    let chosenTitle = DOMSelectors.title.value
    let chosenUrl = DOMSelectors.url.value
    DOMSelectors.addedDivs.insertAdjacentHTML(
        'beforeend',
        '<div id=NewCard></div>'
            '<p></p>'
    )
})