import React from "react";

export const Input = (props) => {
  return (
    <div>
      <h1 className="inputtitle">{props.title}</h1>
      <input
        className="input"
        placeholder={props.placeholder}
        onChange={(e) => {
          props.value(e.target.value);
        }}
      />
    </div>
  );
};
