import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeSubastas from './components/listaDeSubastas';
import ActionPropiedad from './propiedadesapp';

class ActionSubastas extends Component{
  constructor() {
    super();
    
  }
    render() {
        return (
          <div className="pantalla2">
             <div className="header">
               <header>
                  <div className="titulo2">
                     <h5 align="center">Subastas</h5>
                  </div>
                 </header>
               </div>
              <div>
                <ListaDeSubastas>
                 </ListaDeSubastas>
               </div>    
                <div className="terminar subasta">
                   <button className=" indigo accent-1">
                      Terminar subasta
<<<<<<< HEAD
                      <i className="tiny material-icons">event_available</i>
=======
>>>>>>> b54cf5c1c8ce8d95d52f5b8601527cf603832bec
                    </button>
                  </div>
                </div>
        )
    }
}
export default ActionSubastas;