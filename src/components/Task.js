import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <StyledTask onDoubleClick={() => onToggle(task.id)}>
      <div className={`task ${task.reminder ? 'reminder' : ''}`}>
        <h3>
          {task.text}{' '}
          <FaTimes
            className='red'
            onClick={() => onDelete(task.id)}
          />
        </h3>
        <p>{task.day}</p>
      </div>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  div {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .red {
      color: red;
      cursor: pointer;
    }
  }

  .reminder {
    border-left: 10px solid #4ff056;
  }
`;

export default Task;
