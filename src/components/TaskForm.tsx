import * as React from 'react';
import { firestore } from '../firebase/init';
const { useState } = React;

export const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    try {
      firestore.collection('tasks').add({
        title,
        completed: false,
      });
      setTitle('');
    } catch (err) {
      console.error(err);
    }
    setDisabled(false);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder={'add task'}
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={disabled}
        />
      </form>
    </div>
  );
};
