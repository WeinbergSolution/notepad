function getArchivTamplate(indexNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` 
  <div class="note">
  <h3>${archivTitles[indexNote]}</h3>
  <p>${archivnotes[indexNote]}</p>
  <div> 
  <button class="btn" onclick="deleteArchivPushToTrash(${indexNote})">X</button>
  </div>
  </div>
  `;
}

function getTrashNotesTamplate(indexTrashNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` 
  <div class="note">
  <h3>${trashTitles[indexTrashNote]}</h3>
   <p>${trashNotes[indexTrashNote]}</p>
   <div>
  <button onclick="deleteTrashNote(${indexTrashNote})">X</button>
   <button class="btn" onclick="recoverToArchiv(${indexTrashNote})">B-A</button>
    <button class="btn" onclick="recoverToNotice(${indexTrashNote})">B-N</button>
    </div>
    </div>`;
}

function getNotesTamplate(indexNote) {
  // Welche Notiz muss gelöscht werden onclick(indexNote)
  return ` 
  <div class="note">
  <h2>${notesTitles[indexNote]}</h2>
  <p>${notes[indexNote]}<p/>
  <div>
  <button class="btn" onclick="deleteNotePushToTrash(${indexNote})">X</button>
  <button class="btn" onclick="saveData(${indexNote})">A</button>
  </div>
  </div>`;
}
