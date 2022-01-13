import React from "react";
import Repeat from "./Repeat";
// composant fils = repeat ici c le parent 
export const ListOfThings = (props) => {
  return (
    <Repeat nbFois={10}>
      {(index) => <div key={index}> this is item {index} in the list </div>}
    </Repeat>
  );
};
export default ListOfThings;
