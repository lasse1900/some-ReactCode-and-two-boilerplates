import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';


const NoteApp = () => {
  const [notes, dispacth] = useReducer(notesReducer, [])

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispacth({ type: 'POPULATE_NOTES', notes })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const removeNote = (title) => {
    dispacth({
      type: 'REMOVE_NOTE',
      title
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <p>Add note</p>
      <AddNoteForm dispacth={dispacth} />
    </div>
  )
}

export default NoteApp;