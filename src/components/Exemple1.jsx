import React from "react";
export class Exemple1 extends React.Component {
  // prenom="Hugo"
  state = {
    nameH: "coleau",
    prenomH: "hugo",
    age: 52,
  };
  // fonction appeler dans input text pour changer le prenom
  editTexte = (e) => {
    this.setState({ prenomH: e.target.value });
  };

  render() {
    return (
      <div>
        <h1> Mon composant edittexte </h1>
        <p>
          Bonjour {this.state.nameH} {this.state.prenomH}
        </p>
        <p> J'ai {this.state.age} ans </p>

        <div>
          <input
            type="text"
            onChange={(event) => {
              this.editTexte(event);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Exemple1;
