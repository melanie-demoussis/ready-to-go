const Reset = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          {
            props.setState(false);
          }
        }}
      >
        PROCHAIN REPAS
      </button>
    </div>
  );
};
export default Reset;
