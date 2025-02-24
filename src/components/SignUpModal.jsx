import React, { useState } from 'react';

const SignUpModal = ({ onSignUp }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username.trim()) {
      onSignUp(username);
    }
  };

  return (
    <div style={styles.modal}>
      <div style={styles.card}>
        <h2 style={styles.welcome}>Welcome to CodeLeap network!</h2>
        <p>Please enter your username</p>

        <input
          type="text"
          placeholder="John Doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <div style={{display: 'flex', justifyContent: 'right'}}>
        <button
          onClick={handleSubmit}
          disabled={!username.trim()}
          style={username.trim() ? styles.buttonEnabled : styles.buttonDisabled}
        >
          ENTER
        </button>
        </div>
        
      </div>
      
    </div>
  );
};

const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(221, 221, 221)',
    height: '100vh',
    width: '100vw',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '20px 0px 20px 20px',
  },
  welcome: {
    fontsize: '10px',
    margin: '0',
  },
  input: {
    width: '90%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonEnabled: {
    backgroundColor: 'rgba(118, 149, 236)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '20%',
    margin: '10px 0',
    alignItems: 'center',
    margin: '6px 26px 0px 0px',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(118, 149, 236, 0.5)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
    width: '20%',
    margin: '6px 26px 0px 0px',
    alignItems: 'center',  },
};

export default SignUpModal;