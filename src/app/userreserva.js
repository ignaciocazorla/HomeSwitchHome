import React, {Component} from 'react'
import Navbaruser from './components/Navbaruser'
export default class Userreserva extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      reserva: {}
  }
}
fetchReservas() {
  fetch(`/api/reserva/${this.props.match.params.propId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ reservas: data }),
        console.log(this.state.reservas)
    })
}
componentDidMount(){
    this.fetchReservas
}
    render(){
        return (
            <div>
               <Navbaruser/>
               <div className="row">
                 {
                   this.props.reservas.map(reserva =>{
                     return(
                       <div className="col s4">
                         <div className="card">
                           <form>
                              <p>Semana de reserva: {reserva.semana_reserva}</p>
                              <button>Reservar</button>
                           </form>
                         </div>
                       </div>
                     )
                   }
                   )}
               </div>
            </div>   
        )
    }
}