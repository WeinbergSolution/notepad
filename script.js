// W Fragen, was, wann, wie, wo
// notizen anzeigen lassen
// ich brauche notizen
let notes = ["Banana", "Rasenmähen", "Geld", "Müll"];

// ich muss definieren wo sie anzuzeigen sind
function randerNotes() {
  let contenRef = document.getElementById("content");

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contenRef.innerHTML = " " + note;
  }
}
// -> wann werden sie angezeigt
// notizen hinzufügen
// notizen löschen
// notizen archivieren
