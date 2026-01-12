// W Fragen, was, wann, wie, wo
// notizen anzeigen lassen
// ich brauche notizen
let notes = [];

// ich muss definieren wo sie anzuzeigen sind
function randerNotes() {
  let contenRef = document.getElementById("noticeContent");
  contenRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contenRef.innerHTML += getNotesTamplate(note);
  }
}

function getNotesTamplate(note) {
  return ` <p>+ ${note}</p>`;
}

// notizen hinzufügen
//  eingabe auslesen
function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;
  // eingabe den notizen hinzufügen
  notes.push(noteInput);
  // eingabe anzeigen lassen
  randerNotes();
  // clear Inputfield
  noteInputRef.value = "";
}

// notizen löschen
// notizen archivieren
