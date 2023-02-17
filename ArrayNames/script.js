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

var loop = true
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
        document.write(c)
        break
    }
} 