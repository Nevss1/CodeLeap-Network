import React, { useState } from 'react';
import EditModal from './EditModal';
import { Edit, Trash2 } from 'lucide-react'

const PostItem = ({ post, username, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const isOwnPost = post.username === username;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
        method: 'DELETE',
      })
        .then(() => onDelete(post.id))
        .catch((error) => console.error('Erro ao deletar post:', error));
    }
  };

  const handleSave = (updatedPost) => {
    onUpdate(updatedPost);
    setIsEditing(false);
  };

  return (
    <div style={styles.post}>
      <div style={styles.header}>
        <div style={{ fontSize: '15px', fontWeight: '600', marginLeft: '8px' }}>
          {post.title}
        </div>
        {isOwnPost && ( // se for o dono do post, então mostra edição e delete
          <div>
            <button onClick={() => setIsEditing(true)}
            style={styles.editButton}>
              <Edit size={16} />
              </button>
            <button onClick={handleDelete}
             style={styles.deleteButton}>
              <Trash2 size={16} />
              </button>
          </div>
        )}
      </div>
      <div style={styles.username}>
        @{post.username}
      </div>
      <div style={styles.content}>{post.content}</div>
      {isEditing && (
        <EditModal post={post} onSave={handleSave} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

const styles = {
  post: {
    backgroundColor: 'white',
    padding: '0px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  header: {
    backgroundColor: 'rgb(118, 149, 236)',
    color: 'white',
    padding: '10px',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  username: {
    padding: '10px 0px 0px 20px',
    fontSize: '12px',
    color: '#666',
  },
  content: {
    padding: '10px 20px 20px 20px',
    fontSize: '16px',
    color: '#333',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    color: '#666',
  },
};

export default PostItem;