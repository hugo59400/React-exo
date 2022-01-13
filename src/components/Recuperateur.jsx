import React, { Fragment } from "react";

export class Recuperateur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: this.props.nom,
      info: this.props.info,
    };
  }

  render() {
    return (
      <Fragment>
        {/* peut pas etre modifie en dessous pas oblige de creer le constructeur  */}
        {/* <p>quand {this.props.nom}   a faim  il mange du {this.props.info}</p> */}

        {/* this.state.nom peut etre modifiable en dessous oblige de faire un constructeur   */}
        <p>
          quand {this.state.nom} a faim il mange du {this.state.info}
        </p>
      </Fragment>
    );
  }
}
export default Recuperateur;
