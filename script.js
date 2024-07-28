let inputButton = document.querySelector("#inputButton"); 
const container = document.querySelector(".container")
function getInputAndDraw(event){ 
    event.preventDefault();
    let input = document.querySelector("#inputField").value;
    container.innerHTML = "";
    for (let i = 0; i < input; i++) {
        let childContainer = document.createElement("div");
        childContainer.setAttribute("class","childContainer");
        //width fit content
        container.appendChild(childContainer)
        for (let j = 0; j < input; j++) {
            let square = document.createElement("div")
            square.addEventListener("mouseover", () => {
               square.style.backgroundColor = hexColorGen();
            })
            square.setAttribute("class","square")
            childContainer.appendChild(square)
        }
    }
}
function hexColorGen() {
    const randomInt = Math.floor(Math.random() * 16777215);
    const hexColor = randomInt.toString(16).padStart(6, '0');
    return `#${hexColor}`
}

inputButton.addEventListener("click", getInputAndDraw);

