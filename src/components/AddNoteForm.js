import React, { useState } from 'react';

const AddNoteForm = ({ dispacth }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
  
  return (
    <div>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
        <br></br>
      </form>
    </div>
  )
}

export default AddNoteForm;