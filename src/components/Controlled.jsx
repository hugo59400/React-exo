import React, { Fragment } from "react";
import CustomInput from "./CustomInput";
export class Controlled extends React.Component {
  // besoin de letat du composant
  constructor(props) {
    super(props);
    this.state = {
      ville: "Lille",
    };
  }
  // changer valeur du champ ville
  handleChange = (e) => {
      
    this.setState({
      ville: e.target.value,
    });
  };

  // afficher dans console la ville qui a ete ecrite
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ma ville :", this.state.ville);
    console.log("mon input complet  :", this.recupMaRef.value);
    // this.setState({
    //   ville: this.recupMaRef.value,
    // });
    e.stopPropagation()
   
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            label="entrer une  ville"
            ville={this.state.ville}
            maRefCustom={input =>this.recupMaRef = input}
            handleChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </Fragment>
    );
  }
}
export default Controlled;
