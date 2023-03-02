const Reset = (props) => {
  return (
    <div>
      <button
        onClick={(handleStates) => {
          props.handleStates();
          // props.setState(false);
          // props.setState1(false);
          // props.setState2(false);
          // props.setState3(false);
        }}
      >
        PROCHAIN REPAS
      </button>
    </div>
  );
};
export default Reset;
