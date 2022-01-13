import React, { Fragment } from "react";

export class Compteur extends React.Component {
  state = {
    compteur1: 0,
    compteur2: 0,
  };

  incrementCpt1 = (e) => {
    this.setState({
      compteur1: 1 + this.state.compteur1,
    });
  };

  incrementCpt2 = (e) => {
    this.setState({ compteur2: 1 + this.state.compteur2 });
  };

  CptReset = (e) => {
    this.setState({ compteur1: (this.state.compteur1 = 0) });
  };

  Cpt2Reset = (e) => {
    this.setState({ compteur2: (this.state.compteur2 = 0) });
  };

  decrementCpt1 = (e) => {
    this.setState({
      compteur1: this.state.compteur1 - 1,
    });
  };

  decrementCpt2 = (e) => {
    this.setState({
      compteur2: this.state.compteur2 - 1,
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <h1> Mon composant compteur : </h1>
          <p>compteur 1: {this.state.compteur1}</p>
          <button onClick={this.incrementCpt1}> IncrementecCpt1 </button>
          <button onClick={this.decrementCpt1}> decrementCpt1 </button>
          <button onClick={this.CptReset}> reset cpt1 </button>

          <p>-------------</p>

          <p>compteur 2: {this.state.compteur2} </p>
          <button onClick={this.incrementCpt2}> IncrementecCpt1 </button>
          <button onClick={this.decrementCpt2}> decrementCpt2</button>
          <button onClick={this.Cpt2Reset}> reset cpt2 </button>
        </div>
      </Fragment>
    );
  }
}

export default Compteur;
