function IsTheInputValid(givenPrompt){
    if (givenPrompt == ""){
        alert("Dit is geen antwoord.")}
    else if (givenPrompt == null){
        alert("Er is geen antwoord gegeven.")}
    else{
        return(true)
    }
    return(false)
}

while (true){
    let a = prompt("Hoeveel namen wilt u in de array stoppen?")
    if (IsTheInputValid(a) == false){}
    else if (a < 3){
        alert("Minimaal 3 namen.")}
    else{
        let i = 0; 
        let c = []
        while (i < a) {
            let b = prompt("Voer uw namen in:")
            if (IsTheInputValid(b) == true){
                c.push(b)
                i += 1
            }
        }

        const names = document.createElement("h2");
        names.appendChild(document.createTextNode("De ingevoerde namen in de array zijn:"))
        document.body.appendChild(names);
        document.write(c + ".");

        const namesReversed = document.createElement("h2");
        namesReversed.appendChild(document.createTextNode("De ingevoerde namen in de array in omgekeerde volgorde zijn:"))
        document.body.appendChild(namesReversed);
        document.write(c.reverse() + ".");
        break
    }
} 