// importer react
import React, { Fragment } from "react";

// creer classe composant
export class MonPremier extends React.Component {
  displayHello = (e) => {
    alert("Hello");
  };

  render() {
    return (
      <Fragment>
        <h1> Ceci est mon composant qui affiche bonjour </h1>
        <button onClick={this.displayHello}> bonjour </button>
      </Fragment>
    );
  }
}

// exporter classe entiere
export default MonPremier;
