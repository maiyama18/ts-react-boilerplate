import * as React from 'react';
import { firestore } from '../firebase/init';
const { useState, useEffect } = React;

interface Task {
  title: string;
  completed: boolean;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    firestore.collection('tasks').onSnapshot(snapshot => {
      setTasks(snapshot.docs.map(doc => doc.data() as Task));
    });
  }, []);

  return tasks;
};

export const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map(task => (
        <li>{task.title}</li>
      ))}
    </ul>
  );
};
