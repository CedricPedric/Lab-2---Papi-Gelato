function Tafel(givenNumber){
    const vermenigvuldigenH2 = document.createElement("h2");
    vermenigvuldigenH2.innerText = `Tafel van ${givenNumber}:`
    document.body.appendChild(vermenigvuldigenH2);

    for (let i = 1; i < 11; i++){
        const vermenigvuldigenText = document.createElement("p");
        vermenigvuldigenText.innerText = givenNumber + " x " + i + " = " + (givenNumber * i)
        document.body.appendChild(vermenigvuldigenText);
    }

};

Tafel(2);
Tafel(4);
Tafel(6);
Tafel(8);   