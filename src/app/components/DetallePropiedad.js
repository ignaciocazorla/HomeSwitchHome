import React, { Component } from 'react'

export default class DetallePropiedad extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            propiedad: {}
        }
    }

    componentDidMount(){
        fetch(`/api/propiedad/${this.props.match.params.propId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({propiedad: data})
            })
            console.log(this.state)
    }

    render() {
        return (
            <div>
              <h3 align="center">{this.state.propiedad.nombre}</h3>
              <div className="row">
                 <div className="col s2">
                     <p>Localidad: {this.state.propiedad.localidad}</p>
                 </div>
                 <div className="col s2">
                     <p>Provincia: {this.state.propiedad.provincia}</p>
                 </div>
              </div>
              <div className="row">
                  <div className="col s6">
                      <p>Descripción: {this.state.propiedad.descripcion}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col s2">
                      <h5>Precio por semana: ${this.state.propiedad.costo}</h5>
                  </div>
              </div>
            </div>
        )
    }
} 