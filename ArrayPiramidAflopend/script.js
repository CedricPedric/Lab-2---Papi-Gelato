var number = parseInt(window.prompt("Type a number!"), 10);

var numberArray = []
for (let i = 0; i < (number + 1); i++){
    numberArray.push(i) 
}
console.log(numberArray);

const piramidContainer = document.createElement("div");
document.body.appendChild(piramidContainer);

const piramidHeader = document.createElement("h1");
    piramidHeader.innerText = "Piramide aflopend"
    piramidContainer.appendChild(piramidHeader);

const arrayShowText = document.createElement("p");
arrayShowText.innerText = "Array: " + numberArray
piramidContainer.appendChild(arrayShowText);


for (let x = 0; x < (number + 1); x++){
    const arrayText = document.createElement("p");
    arrayText.innerText =  numberArray.slice(x)
    arrayText.style.margin = "0px"
    piramidContainer.appendChild(arrayText);
}