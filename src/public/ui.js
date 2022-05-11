import { saveNote } from "./socket.js";

const notesList = document.querySelector('#notes');

const noteUI = note => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${note.title}</h1>
        <div>
            <button>Delete</button>
            <button>Update</button>
        </div>
        <p>${note.description}</p>
    `;
    return div;
}

export const renderNotes = notes => {
    notes.forEach(note => notesList.appendChild(noteUI(note)));
}

export const onHandleSubmit = (e) => {
    e.preventDefault();
    saveNote(noteForm['title'].value, noteForm['description'].value);
}

export const appendNote = note => {
    notesList.append(noteUI(note));
}