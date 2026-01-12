// W Fragen, was, wann, wie, wo
// notizen anzeigen lassen
// ich brauche notizen
let notes = [];

// ich muss definieren wo sie anzuzeigen sind
function renderNotes() {
  let contenRef = document.getElementById("noticeContent");
  contenRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contenRef.innerHTML += getNotesTamplate(indexNote);
  } // Welche Notiz muss gelöscht werden (indexNote)
}

function getNotesTamplate(indexNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` <p>+ ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">X</button></p>`;
}

// notizen hinzufügen
//  eingabe auslesen
function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;
  // eingabe den notizen hinzufügen
  notes.push(noteInput);
  // eingabe anzeigen lassen
  renderNotes();
  // clear Inputfield
  noteInputRef.value = "";
}

// notizen löschen
// wann muss die notiz gelöscht werden (onclick)

function deleteNote(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  notes.splice(indexNote, 1);
  // anzeige updaten
  renderNotes();
}

// notizen archivieren
