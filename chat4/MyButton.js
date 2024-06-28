import React from "react";

const MyButton = props => {
  const text = props.text;
  return <button onClick={props.handleClick}>{text}</button>;
};

export default MyButton;
