import React, { useState, createContext } from 'react';

export const NoteContext = createContext();

export const NoteProvider = props => {

    const [NotesListData, setNotesListData] = useState([]);

    const deleteNoteItem = noteId => {

        setNotesListData(prevNotesListData => {
            return prevNotesListData.filter(note => note.id !== noteId);
        });
    }

    return (

        <NoteContext.Provider value={[NotesListData, setNotesListData, deleteNoteItem]}>
            {props.children}
        </NoteContext.Provider>
    );
}