import React, { useState } from 'react';

const PostForm = ({ username, onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      fetch('https://dev.codeleap.co.uk/careers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          title,
          content,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTitle('');
          setContent('');
          onPostCreated(); // Notifica que um post foi criado
        })
        .catch((error) => console.error('Erro ao criar post:', error));
    }
  };

  return (
    <div style={styles.form}>
      <div style={ 
        {fontSize: '14px', fontWeight: 'bold', margin: '0' }
      }>
        What’s on your mind?
      </div>
      <div style={{
        margin: '14px 0px 8px 4px',
        fontSize: '12px',
      }}>
        Title
      </div>
      <input
        type="text"
        placeholder="Hello, world!"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
       <div style={{
        margin: '14px 0px 8px 4px',
        fontSize: '12px',
      }}>
        Content
      </div>
      <textarea
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={styles.textarea}
      >
        {content}
      </textarea>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={handleSubmit}
          disabled={!title.trim() || !content.trim()}
          style={title.trim() && content.trim() ? styles.buttonEnabled : styles.buttonDisabled}
        >
          Create
        </button>
      </div>
    </div>
  );
};

const styles = {
  form: {
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '0px 0 0 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '20px',
    width: '95%',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '0px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '40px',
    width: '95%',
    resize: 'none',
    textdecoration: 'none',
  },
  buttonEnabled: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
    marginTop: '20px',
  },
};

export default PostForm;