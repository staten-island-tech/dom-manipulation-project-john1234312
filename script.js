const DOMSelectors = {
    addButton: document.getElementById("addBtn"),
    deleteButton: document.getElementById("deleteBtn"),
    clearButton: document.getElementById("clearnBtn"),
    containerBox: document.getElementById("container"),
    text: document.getElementById("randomText"),
    input: document.getElementById("input"),
    addedDivs: document.getElementById("inputdiv")
}

DOMSelectors.addButton.addEventListener("click", function addThis(){
    let inputText = DOMSelectors.input.value
    DOMSelectors.containerBox.insertAdjacentHTML("beforeend", `<div id="inputDiv">${inputText}</div>`)
    DOMSelectors.input.value = ''
    }
)

DOMSelectors.deleteButton.addEventListener("click", function deleteThis(){
    DOMSelectors.containerBox.remove(DOMSelectors.addedDivs[-1])
} )