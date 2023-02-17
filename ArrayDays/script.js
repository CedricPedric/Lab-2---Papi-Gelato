var days = ["maandag","dinsdag","woensdag", "donderdag", "vrijdag", "zaterdag","zondag"]

const allWeekDays = document.createElement("h2");
allWeekDays.appendChild(document.createTextNode("Alle dagen van de week zijn:"))
document.body.appendChild(allWeekDays);
document.write(days.join(", ") + ".");

const allWorkDays = document.createElement("h2");
allWorkDays.appendChild(document.createTextNode("De werkdagen zijn:"))
document.body.appendChild(allWorkDays);
document.write(days.splice(0,5).join(", ") + ".");
days = ["maandag","dinsdag","woensdag", "donderdag", "vrijdag", "zaterdag","zondag"];

const weekendDays = document.createElement("h2");
weekendDays.appendChild(document.createTextNode("De weekenddagen zijn:"))
document.body.appendChild(weekendDays);
document.write(days.splice(-2).join(", ") + ".");
days = ["maandag","dinsdag","woensdag", "donderdag", "vrijdag", "zaterdag","zondag"]


const reverseWorkDays = document.createElement("h2");
reverseWorkDays.appendChild(document.createTextNode("De werkdagen in omgekeerde volgorde zijn:"))
document.body.appendChild(reverseWorkDays);
document.write(days.splice(0,5).reverse().join(", ") + ".");
days = ["maandag","dinsdag","woensdag", "donderdag", "vrijdag", "zaterdag","zondag"]

const reverseWeekend = document.createElement("h2");
reverseWeekend.appendChild(document.createTextNode("De weekenddagen in omgekeerde volgorde zijn:"))
document.body.appendChild(reverseWeekend);
document.write(days.splice(-2).reverse().join(", ") + ".");