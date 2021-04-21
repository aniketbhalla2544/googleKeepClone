import React from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import NotesList from './noteslist/NotesList'
import { NoteProvider } from './NoteContext';

export default function App() {
  return (

    <>
      <Header />
      <main>
        <NoteProvider>
          <CreateNote />
          <NotesList />
        </NoteProvider>
      </main>
    </>
  );
}