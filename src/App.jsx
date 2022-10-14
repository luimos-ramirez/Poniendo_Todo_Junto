import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";

/*
Inicializar proyecto: npm start
Detener el proyecto: Ctrl+C
*/

class App extends React.Component {

    render() {

    /* AplicacionSegundaPalabra -> PascalCase
    onClick -> camelCase
    */

    return(
        <div className="container">
            <PersonCard firstName="Cesar" lastName="Bermúdez" age={34} hairColor="Black" />
            <PersonCard firstName="Luisa" lastName="Ramirez" age={30} hairColor="Red" />
            <PersonCard firstName="Sophia" lastName="Bermúdez" age={4} hairColor="Brown" />
            <PersonCard firstName="Ada" lastName="Bermúdez" age={2} hairColor="Black" />
        </div>
    );
    }

}

export default App;
