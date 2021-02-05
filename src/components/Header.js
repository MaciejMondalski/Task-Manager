import styled from 'styled-components';
import Button from './Button';

const Header = ({ title, displayAddTask, addStatus }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Button
        color={addStatus ? 'red' : 'black'}
        text={addStatus ? 'Close' : 'Add'}
        displayAddTask={displayAddTask}
      />
    </StyledHeader>
  );
};

Header.defaultProps = {
  title: 'Task Manager',
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .btn {
    display: inline-block;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
`;

export default Header;
