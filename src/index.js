import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    case 'ADD_NOTE':
    return [
      ...state,
      { title: action.title, body: action.body}
    ]
    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title)
    default:
      return state
  }
};

const NoteApp = () => {
  const [notes, dispacth] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispacth({ type: 'POPULATE_NOTES', notes })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    dispacth({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    dispacth({
      type:'REMOVE_NOTE',
      title
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
        <br></br>
      </form>
    </div>
  )
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('Setting up effect');

    return () => {
      console.log('Cleaning up the effect');
    }
  }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
