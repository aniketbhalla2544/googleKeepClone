import React, { useState, createContext } from 'react';

export const NoteContext = createContext();

export const NoteProvider = props => {

    const [NotesListData, setNotesListData] = useState([]);

    return (

        <NoteContext.Provider value={[NotesListData, setNotesListData]}>
            {props.children}
        </NoteContext.Provider>

    );
}