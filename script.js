// W Fragen, was, wann, wie, wo
// notizen anzeigen lassen
// ich brauche notizen
let notes = [];
let notesTitles = [];

let trashNotes = [];
let trashTitles = [];

let archivnotes = [];
let archivTitles = [];

// ich muss definieren wo sie anzuzeigen sind
function renderNotes() {
  let contentRef = document.getElementById("noticeContent");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNotesTamplate(indexNote);
  } // Welche Notiz muss gelöscht werden (indexNote)

  // Holt aus dem LocalStorage
  getFromLocalStorage();
  archivRender();
}

function getNotesTamplate(indexNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` <p>Title: ${notesTitles[indexNote]} Notiz: ${notes[indexNote]} 
  <button onclick="deleteNotePushToTrash(${indexNote})">X</button><button onclick="saveData(${indexNote})">A</button></p>
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
  notesTitles.push(noteTitleInput);
  notes.push(noteInput);
  // eingabe anzeigen lassen
  renderNotes();
  //ins Archiv speichern

  // clear Inputfield
  noteTitleInputRef.value = "";
  noteInputRef.value = "";
}

// notizen löschen
// wann muss die notiz gelöscht werden (onclick)

function deleteNotePushToTrash(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  let trashTitle = notesTitles.splice(indexNote, 1);
  let trashNote = notes.splice(indexNote, 1);
  //gelöschtes element wird in das trashnotes[] Array geschoben
  trashTitles.push(trashTitle[indexNote]);
  trashNotes.push(trashNote[indexNote]);
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
   ${trashNotes[indexTrashNote]} <button onclick="deleteTrashNote(${indexTrashNote})">X</button>
   <button onclick="recoverToArchiv(${indexTrashNote})">Back to A</button>
    <button onclick="recoverToNotice(${indexTrashNote})">Back to Notic</button></p>`;
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

function saveData(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  let archivTitle = notesTitles.splice(indexNote, 1);
  let archivnote = notes.splice(indexNote, 1);

  //gelöschtes element wird in das trashnotes[] Array geschoben
  archivTitles.push(archivTitle[indexNote]);
  archivnotes.push(archivnote[indexNote]);
  // aufruf der function saveToLocalStorage
  saveToLocalStorage();
  // aufruf der function render(), welches die sachen im Div mit der ID="content" sichtbar macht
  renderNotes();
  archivRender();
}

function saveToLocalStorage() {
  // setzt eine Key & Value in den localStorage.
  //Value wird als JSON, als String "," Seperiert in das Array my notes bzw  notesTitles geschrieben.
  localStorage.setItem("archivNotes", JSON.stringify(archivnotes));
  localStorage.setItem("ArchivTitles", JSON.stringify(archivTitles));
}

// Function um Einträge aus dem LocalStorage aus zu lesen
function getFromLocalStorage() {
  // JSON.parse(localStorage.getItem("notes")) -> parset das ganze zurück in ein Objekt bzw Array und speichert es in myNotesArray.
  let myNotesArray = JSON.parse(localStorage.getItem("archivNotes"));
  let myTitlesArray = JSON.parse(localStorage.getItem("ArchivTitles"));
  // ist myArray ungleich null dann mach nix ... sonst speicher myArray in myData.
  if ((myNotesArray !== null) & (myTitlesArray !== null)) {
    archivnotes = myNotesArray;
    archivTitles = myTitlesArray;
  }
  // speichert es dann in myData
}

function archivRender() {
  //referenz auf das element mit der Id "content" (das ist ein div)
  let contentRef = document.getElementById("archivContent");
  // leeren des innerHTML von dem Element mit der ID "content" damit wenn neue
  // hinhalte hinzukommen, nicht die alten wieder mit reingeworfen werden die schon da sind
  contentRef.innerHTML = "";

  // Forschleife zum durchiterieren durch das Array myData
  // solange index größer als Array länge dann ...
  for (let index = 0; index < archivnotes.length; index++) {
    // schreibe in das innerHtml von contentRef also dem Element mit der id="content", also dem div folgendes ...
    contentRef.innerHTML += getArchivTamplate(index);
  }
}

function getArchivTamplate(indexNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` <p>Title: ${archivTitles[indexNote]} Notiz: ${archivnotes[indexNote]} 
  <button onclick="deleteArchivPushToTrash(${indexNote})">X</button></p>
  <p></p>`;
}

function deleteArchivPushToTrash(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  let archivTitle = archivTitles.splice(indexNote, 1);
  let archivNote = archivnotes.splice(indexNote, 1);
  //gelöschtes element wird in das trashnotes[] Array geschoben
  trashTitles.push(archivTitle[indexNote]);
  trashNotes.push(archivNote[indexNote]);
  // anzeige updaten archiv
  archivRender();
  // anzeige Trash notice update
  renderTrashNotes();
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  archivnotes.splice(indexNote, 1);
  archivTitles.splice(indexNote, 1);
  // schreibt das durch splice gekürzte Array neu in den local storage.
  localStorage.setItem("archivNotes", JSON.stringify(archivnotes));
  localStorage.setItem("ArchivTitles", JSON.stringify(archivTitles));
  //notiz aus trahs löschen , aus dem array löschen
  // anzeige Trash notice update
}

function deleteArchivNote(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  archivnotes.splice(indexNote, 1);
  archivTitles.splice(indexNote, 1);
  // schreibt das durch splice gekürzte Array neu in den local storage.
  localStorage.setItem("archivNotes", JSON.stringify(archivnotes));
  localStorage.setItem("ArchivTitles", JSON.stringify(archivTitles));
  //notiz aus trahs löschen , aus dem array löschen
  // anzeige Trash notice update

  //localStorage.removeItem() ..... warum entfernt das das ganze Array und man kann kein index dazu nutzen ?
  archivRender();
}

function recoverToArchiv(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  let archivTitle = trashTitles.splice(indexNote, 1);
  let archivNote = trashNotes.splice(indexNote, 1);
  //gelöschtes element wird in das trashnotes[] Array geschoben
  archivTitles.push(archivTitle[indexNote]);
  archivnotes.push(archivNote[indexNote]);
  // anzeige Trash notice update
  renderTrashNotes();

  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  trashNotes.splice(indexNote, 1);
  trashTitles.splice(indexNote, 1);
  // schreibt das durch splice gekürzte Array neu in den local storage.
  saveToLocalStorage();
  //notiz aus trahs löschen , aus dem array löschen
  // anzeige Trash notice update
  archivRender();
}

function recoverToNotice(indexNote) {
  // Welche Notiz muss gelöscht werden
  //Array.splice löscht ein element aus dem Array
  let noteTitle = trashTitles.splice(indexNote, 1);
  let note = trashNotes.splice(indexNote, 1);
  //gelöschtes element wird in das trashnotes[] Array geschoben
  notesTitles.push(noteTitle[indexNote]);
  notes.push(note[indexNote]);
  // anzeige updaten notizen
  renderNotes();
  // anzeige Trash notice update
  renderTrashNotes();
}
