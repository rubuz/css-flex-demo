const Box = (props) => {
  const boxBg = {
    backgroundColor: `${props.bg}`,
  };

  return (
    <div className="box" style={boxBg}>
      {props.text}
    </div>
  );
};

export default Box;
