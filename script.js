const DOMSelectors = {
    addButton: document.getElementById("addBtn"),
    deleteButton: document.getElementById("deleteBtn"),
    clearButton: document.getElementById("clearnBtn"),
    containerBox: document.getElementById("container"),
    text: document.getElementById("randomText"),
    input: document.getElementById("input"),
    addedDiv: document.querySelector(".inputDiv")
}

DOMSelectors.addButton.addEventListener("click", function addThisShit(){
    let inputText = DOMSelectors.input.value
    DOMSelectors.containerBox.insertAdjacentHTML("beforeend", `<div class="inputDiv">${inputText}</div>`)
    DOMSelectors.input.value = ''
    }
)

DOMSelectors.deleteButton.addEventListener("click", function deleteThisShit() {
    DOMSelectors.addedDiv.removeChild([-1])
})
