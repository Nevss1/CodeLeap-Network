import React, { useState } from 'react';
import SignUpModal from './components/SignUpModal';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


function App() {
  const [username, setUsername] = useState('');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePostCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div>
        {!username ? (
          <SignUpModal onSignUp={setUsername} />) : // se não tiver usuário, fique na SignUpModal
          ( 
        <div style={styles.blogModal}>
          <header style={styles.header}>
            <div style={styles.title}>CodeLeap Network</div>
          </header>
          <main style={styles.main}>
            <PostForm username={username} onPostCreated={handlePostCreated} />
            <PostList username={username} refreshTrigger={refreshTrigger} />
          </main>
        </div>
      )}
    </div>
  );
}

const styles = {
  blogModal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '600px',
    height: '100%',
    margin: '0 auto',
    backgroundColor: 'white',
  },
  title: {
    margin: '0',
    marginLeft: '10px',
    fontsize: '16px',
    fontweight: 'bold',
    padding: '20px',
  },
  header: {
    backgroundColor: 'rgb(118, 149, 236)',
    color: 'white',
    width: '100%',
    fontsize: '10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'left',
  },
  main: {
    padding: '20px',
    width: '90%',
  },
};

export default App;