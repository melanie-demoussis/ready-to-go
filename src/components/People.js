const People = (props) => {
  return (
    <div>
      <button
        className={props.state ? "absent" : "present"}
        onClick={() => {
          {
            props.setState(false);
          }
        }}
      >
        ABSENT
      </button>
      <button
        className={props.state ? "present" : "absent"}
        onClick={() => {
          props.setState(true);
        }}
      >
        PRESENT
      </button>
    </div>
  );
};
export default People;
