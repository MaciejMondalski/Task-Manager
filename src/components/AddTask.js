import { useState } from 'react';
import styled from 'styled-components';

const AddTask = ({ onAdd, showAddTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <div className='check'>
          <label>Set Reminder</label>
          <input
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
      </div>
      <input className='btn' type='submit' value='Save Task' />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  animation-name: example;
  animation-duration: 0.5s;

  .form-control {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.3rem;
  }

  label {
    margin: 0.5rem 0 0.2rem 0;
  }

  .check {
    display: flex;
    align-items: baseline;

    input {
      margin-left: 0.6rem;
      transform: scale(1.5);
    }
  }

  .btn {
    margin: 0.5rem 0;
    background: black;
    color: whitesmoke;
    border: none;
    padding: 0.6rem;
    border-radius: 0.4rem;
    font-size: 1rem;
  }

  @keyframes example {
    from {
      opacity: 40%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export default AddTask;
