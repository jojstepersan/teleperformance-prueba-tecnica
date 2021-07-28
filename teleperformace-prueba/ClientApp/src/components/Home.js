import React, { Component } from 'react';
import { InputNumber } from './InputNumber';
import { ButtonSuccess } from './ButtonSuccess';
import { ButtonBack } from './ButtonBack';
import { Alert }from "react-bootstrap";

export class Home extends Component {
  static displayName = Home.name;
  //static notificationAlertRef = React.useRef(null);

  constructor(props) {
    super(props);
    this.state = { showModal:false,messageModal:"" };
  }

   notify(place){
    var color = Math.floor(Math.random() * 5 + 1);
    var type = "primary";

    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            {this.state.messageModal}
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    React.useRef(null).current.notificationAlert(options);
  };

  searchNitCompany =(e)=>{    
    let nit=document.getElementById("nitCompany").value
    this.getCompanyByNit(nit)
  }

  render () {

    return (
      <div>
        <div className='card'>
          <div className='card-header'>
            <h4><b>Inscripción al servicio:</b></h4>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-12'>
                Ingrese el NIT de la persona natural o juridica para la que realizará el tramite,
                sin incluir el codigo de verificación. Luego seleccione Continuar para completar su
                solicitud.
              </div>
              <div className='col-md-12'>
                <InputNumber
                name='nitCompany'/>
              </div>
              <div className='col-md-6'>
                <div className='my-2'></div>
                <ButtonSuccess
                  title="Continuar >"
                  searchByNit={this.searchNitCompany}
                />
              </div>
              <div className='col-md-6'>
              <div className='my-2'></div>
              <ButtonBack
                title="< Regresar"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  async getCompanyByNit(nit) {
    const response = await fetch('api/company/'+nit);
    const data = await response.json();
    if(!response.ok){
      this.setState({showModal:true,messageModal:data})
      //this.notify("tc")
      alert(data);
    }else{
      this.props.history.push("/CompanyForm?nit="+nit);
    }
  }
}
