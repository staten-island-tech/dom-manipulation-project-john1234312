const DOMSelectors = {
    addButton: document.getElementById("addBtn"),
    deleteButton: document.getElementById("deleteBtn"),
    clearButton: document.getElementById("clearnBtn"),
    containerBox: document.getElementById("container"),
    text: document.getElementById("randomText"),
    input: document.getElementById("input")
}

DOMSelectors.addButton.addEventListener("click", function addThisShit(){
    let inputText = DOMSelectors.input.value
    DOMSelectors.containerBox.insertAdjacentHTML("beforeend", `<div class="inputDiv">${inputText}</div>`)
    DOMSelectors.input.value = ''
    }
)

DOMSelectors.deleteButton.addEventListener("click", function deleteThisShit(){
    DOMSelectors.containerBox.remove(DOMSelectors.containerBox[-1])
} )