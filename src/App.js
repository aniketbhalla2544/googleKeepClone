import React from 'react';
import './css/app.css';
import Header from './Header';
import CreateNote from './CreateNote';
import NotesList from './noteslist/NotesList'

export default function App() {
  return (

    <>
      <Header />

      <main>
        <CreateNote />
        <NotesList />
      </main>


    </>
  );
}