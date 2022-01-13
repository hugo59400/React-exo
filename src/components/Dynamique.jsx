import React, { Fragment } from "react";

let obj = {
  premier(props) {
    return <div> nom: {props.val} </div>;
  },
  second(props) {
    return <div>prenom : {props.val}</div>;
  },
};
export const Dynamique = (props) => {
  const Choice = obj[props.type];
  return (
    <Fragment>
      <h1>COMPOSANT dynamique </h1>
      <Choice val={props.val} />
    </Fragment>
  );
};
export default Dynamique;
