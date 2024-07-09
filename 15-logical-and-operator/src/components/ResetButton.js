const ResetButton = ({onClick}) => {
    return(
    <div>
      <button onClick={onClick} className="resetButton">
        Reset
      </button>
    </div>)
};

export default ResetButton;