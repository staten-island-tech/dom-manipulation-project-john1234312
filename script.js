const DOMSelectors = {
    input: document.getElementById("form"),
    artist: document.getElementById("artist"),
    title: document.getElementById("title"),
    url: document.getElementById("url"),
    addedDivs: document.getElementById("addedDivs")
}

function clearFields(){
    DOMSelectors.url.value=""
    DOMSelectors.title.value=""
    DOMSelectors.artist.value=""
}

function remove(){
    let removeBtn = 
    document.querySelectorAll(".removeBtn");
    removeBtn.forEach((el) => {
        el.addEventListener("click", function () {
            el.parentNode.parentNode.removeChild(el.parentNode)
        })
    })
}

DOMSelectors.input.addEventListener('submit', function addCard() {
    let chosenArtist = DOMSelectors.artist.value
    let chosenTitle = DOMSelectors.title.value
    let chosenUrl = DOMSelectors.url.value
    DOMSelectors.addedDivs.insertAdjacentHTML(
        'beforeend',
        `<div class="NewCard">
            <img 
                class="displayPicture" 
                src="${chosenUrl}}"
            />
            <h2 
                class="displayArtist"> 
                ${chosenArtist}
            />
            <h3
                class="displayTitle">
                ${chosenTitle}
            />
            <button 
                class="removeBtn">
                Remove Music
            </button>
        </div>;`
        );
        clearFields()
        remove()
    })
