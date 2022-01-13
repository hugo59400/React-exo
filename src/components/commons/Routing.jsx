import React, { Fragment } from "react";
//importer des outils routing ci dessous
import {
  BrowserRouter as Router, Routes, Route,Navigate, Link} from "react-router-dom";
import Accueil from "../pages/Accueil";
import Page404 from "../pages/Page404";
import PageCompteurs from "../pages/PageCompteurs";
import PageUseEffect from "../pages/PageUseEffect";
import PageUtilisateurs from "../pages/PageUtilisateurs";
import NavBar from "./NavBar";
// Router=permet de definir tout le routing de l'appli



export const Routing = (props) => {
  return (
    <Fragment>
      <Router>
        {/* liens vers differente destination  */}
        {/* les differente route pr y acceder a ces dest  */}
      <NavBar pages={props.pages}/>
        <Routes>
{/* redirection du / vers accueil  */}
          <Route path="/" element={ <Navigate to="/accueil"/> }/>
          <Route path="/accueil" element={<Accueil />}></Route>
          <Route path="/utilisateurs" element={<PageUtilisateurs />}></Route>
          <Route path="/compteurs" element={<PageCompteurs />}></Route>
          <Route path="/effect" element={<PageUseEffect />}></Route>
          <Route path="*" element={<Page404  />} /> 

        </Routes>
      </Router>
    </Fragment>
  );
};
export default Routing;
