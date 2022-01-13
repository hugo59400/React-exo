import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// importer lendroit du composant qui a ete cree 
import App from './components/commons/App'


ReactDOM.render( <
    React.StrictMode > {
        /* appel des composant de classe crées ici seulement App car App contient les autres composants crée ensuite  */
    } <
    App / >

    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals