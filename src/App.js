import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Pick up brother',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Sell the juice',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  const displayAddTask = () => {
    if (!showAddTask) {
      setShowAddTask(true);
    } else {
      setShowAddTask(false);
    }
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <StyledContainer>
      <GlobalStyle />
      <Header
        displayAddTask={displayAddTask}
        addStatus={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks to Show'
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;

  max-width: 500px;
  margin: 30px auto;
  min-height: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  backdrop-filter: opacity(20%);
`;

export default App;
