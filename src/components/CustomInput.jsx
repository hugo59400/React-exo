import React, { Fragment } from "react";

export const CustomInput = (props) => {
  return (
    <Fragment>
      <label> {props.label} </label>
      <input
        type="text"
        defaultValue={props.ville}
        // onChange={this.handleChange}
        ref={props.maRefCustom}
        onChange={props.handleChange}
      />
    </Fragment>
  );
};
export default CustomInput;
