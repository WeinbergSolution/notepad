// W Fragen, was, wann, wie, wo
// notizen anzeigen lassen
// ich brauche notizen
let notes = [];
let notesTitle = [];

let trashNotes = [];
let trashTitles = [];

// ich muss definieren wo sie anzuzeigen sind
function renderNotes() {
  let contentRef = document.getElementById("noticeContent");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNotesTamplate(indexNote);
  } // Welche Notiz muss gelöscht werden (indexNote)
}

function getNotesTamplate(indexNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` <p>Title: ${notesTitle[indexNote]} Notiz: ${notes[indexNote]} 
  <button onclick="deleteNotePushToTrash(${indexNote})">X</button></p>
  <p></p>`;
}

// notizen hinzufügen
//  eingabe auslesen
function addNote() {
  let noteTitleInputRef = document.getElementById("titleNote_input");
  let noteTitleInput = noteTitleInputRef.value;
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;
  // eingabe den notizen hinzufügen
  notesTitle.push(noteTitleInput);
  notes.push(noteInput);
  // eingabe anzeigen lassen
  renderNotes();
  // clear Inputfield
  noteTitleInput.value = "";
  noteInputRef.value = "";
}

// notizen löschen
// wann muss die notiz gelöscht werden (onclick)

function deleteNotePushToTrash(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  let trashTitle = notesTitle.splice(indexNote, 1);
  let trashNote = notes.splice(indexNote, 1);
  //gelöschtes element wird in das trashnotes[] Array geschoben
  trashTitles.push(trashTitle[0]);
  trashNotes.push(trashNote[0]);
  // anzeige updaten notizen
  renderNotes();
  // anzeige Trash notice update
  renderTrashNotes();
}

// notizen archivieren

// gelöschte notizen in den Mülleimer schieben
function renderTrashNotes() {
  let contentTrashRef = document.getElementById("trashContent");
  contentTrashRef.innerHTML = "";
  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    contentTrashRef.innerHTML += getTrashNotesTamplate(indexTrashNote);
  } // Welche Notiz muss gelöscht werden (indexNote)
}

function getTrashNotesTamplate(indexTrashNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` <p>Title: ${trashTitles[indexTrashNote]} Notiz:
   ${trashNotes[indexTrashNote]} <button onclick="deleteTrashNote(${indexTrashNote})">X</button></p>`;
}

// Element aus Trash löschen
function deleteTrashNote(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  trashNotes.splice(indexNote, 1);
  trashTitles.splice(indexNote, 1);
  //notiz aus trahs löschen , aus dem array löschen
  // anzeige Trash notice update
  renderTrashNotes();
}

// Archiv

function SaveData() {}

function saveToLocalStorage() {}

function getFromLocalStorage() {}
