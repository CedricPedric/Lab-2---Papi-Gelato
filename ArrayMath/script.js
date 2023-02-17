
var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee){   
    const optellenContainer = document.createElement("div");
    document.body.appendChild(optellenContainer);

    const optellenH2 = document.createElement("h2");
    optellenH2.innerText = "Optellen van de twee arrays zijn:"
    optellenContainer.appendChild(optellenH2);

    for (a in arrayEen){
        const optellenText = document.createElement("p");
        optellenText.innerText = arrayEen[a] + " + " + arrayTwee[a] + " = " + (arrayEen[a] + arrayTwee[a])
        optellenContainer.appendChild(optellenText);
    }
};

function aftrekken(arrayEen, arrayTwee){
    const aftrekkenContainer = document.createElement("div");
    document.body.appendChild(aftrekkenContainer);

    const aftrekkenH2 = document.createElement("h2");
    aftrekkenH2.innerText = "Aftrekken van de twee arrays zijn:"
    aftrekkenContainer.appendChild(aftrekkenH2);

    for (a in arrayEen){
        const aftrekkenText = document.createElement("p");
        aftrekkenText.innerText = arrayEen[a] + " - " + arrayTwee[a] + " = " + (arrayEen[a] - arrayTwee[a])
        aftrekkenContainer.appendChild(aftrekkenText);
    }

};

function vermenigvuldigen(arrayEen, arrayTwee){
    const vermenigvuldigenContainer = document.createElement("div");
    document.body.appendChild(vermenigvuldigenContainer);

    const vermenigvuldigenH2 = document.createElement("h2");
    vermenigvuldigenH2.innerText = "Vermenigvuldigen van de twee arrays zijn:"
    vermenigvuldigenContainer.appendChild(vermenigvuldigenH2);

    for (a in arrayEen){
        const vermenigvuldigenText = document.createElement("p");
        vermenigvuldigenText.innerText = arrayEen[a] + " x " + arrayTwee[a] + " = " + (arrayEen[a] * arrayTwee[a])
        vermenigvuldigenContainer.appendChild(vermenigvuldigenText);
    }

};

function delen(arrayTwee, arrayEen){
    const delenContainer = document.createElement("div");
    document.body.appendChild(delenContainer);

    const delenH2 = document.createElement("h2");
    delenH2.innerText = "Delen van de twee arrays zijn:"
    delenContainer.appendChild(delenH2);

    for (a in arrayEen){
        const delenText = document.createElement("p");
        delenText.innerText = arrayEen[a] + " / " + arrayTwee[a] + " = " + (arrayEen[a] / arrayTwee[a])
        delenContainer.appendChild(delenText);

}
};


optellen(arrayEen,arrayTwee);
aftrekken(arrayTwee,arrayEen);
vermenigvuldigen(arrayTwee,arrayEen);
delen(arrayEen, arrayTwee);