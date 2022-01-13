import React, { Fragment } from "react";
export const Repeat = (props) => {
  let items = [];
  for (let i = 0; i < props.nbFois; i++) {
    items.push(props.children(i));
  }
  return (
    <Fragment>
      <h1> AFFICHAGE BOUCLE FOR INDEX </h1>
      <p> info : {props.nbFois} </p>
      <div>{items}</div>
    </Fragment>
  );
};
export default Repeat;
