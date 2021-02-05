const Button = ({ text, displayAddTask, color }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={displayAddTask}
        className='btn'
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
