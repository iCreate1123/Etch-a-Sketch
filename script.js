const inputButton = document.querySelector("#inputButton"); 
const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetButton");
container.style.display = "none";

function getInputAndDraw(event){ 
    event.preventDefault();
    let input = document.querySelector("#inputField").value;
    container.innerHTML = "";
    if (input > 100) {
        container.textContent = "Amount should not exceed 100. Please enter a lower amount. :)";
        container.style.border = "none";
    }
    if (input <= 100 && input != 0) {
        container.style.display = "block"
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
}
function hexColorGen() {
    const randomInt = Math.floor(Math.random() * 16777215);
    const hexColor = randomInt.toString(16).padStart(6, '0');
    return `#${hexColor}`
}

inputButton.addEventListener("click", getInputAndDraw);

function resetContent (event) {
    event.preventDefault();
    container.innerHTML = "";
    container.style.display = "none";

}

resetButton.addEventListener("click" , resetContent);