
import React, { Component } from 'react';
import { InputNumber } from './InputNumber';
import { InputText } from './InputText';
import { ButtonSuccess } from './ButtonSuccess';
import { ButtonBack } from './ButtonBack';
import { Alert }from "react-bootstrap";
import '../assets/css/checkBox.css'

export class CompanyForm extends Component {
  static displayName = CompanyForm.name;
  static queryString = window.location.search;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getCompanyByNit(new URLSearchParams(this.props.location.search).get("nit"));
  }
saveCompanyHandleClick= async (e)=>{
  let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
           idCompany:document.getElementById("idCompany").value,
           identificationType: document.getElementById("identificationType").value,
           identificationNumber: document.getElementById("identificationNumber").value,
           firstName: document.getElementById("firstName").value,
           secondName: document.getElementById("secondName").value,
           firstLastName: document.getElementById("firstLastName").value,
           secondLastName: document.getElementById("secondLastName").value,
           companyName: document.getElementById("companyName").value,
           email: document.getElementById("email").value,
           allowMsm: document.getElementById("msm").checked,
           allowEmail: document.getElementById("allowEmail").checked
         })
    };

    const response = await fetch('api/company', requestOptions);
    const data = await response.json();
}


  render() {
    return (
      <div className='card'>
      <input id="idCompany" type="hidden"/>
        <div className='card-header'>
          <h4><b>Datos de la persona natural o juridica que solicita el servicio de tramite</b></h4>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="identificationType">Tipo identificacion:*</label>
              <select name="identificationType" id="identificationType" className='form-control'>
                <option value="1">Persona natural</option>
                <option value="2">Persona juridica</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor='identificationNumber'>Número de identificacion:*</label>
              <InputNumber
              name='identificationNumber'/>
            </div>
            <div className='col-md-6'>
              <label htmlFor='firstName'>Primer nombre:*</label>
              <InputText
              name='firstName'/>
            </div>
            <div className='col-md-6'>
              <label htmlFor='secondName'>Segundo nombre:*</label>
              <InputText
              name='secondName'/>
            </div>
            <div className='col-md-6'>
              <label htmlFor='firstLastName'>Primer apellido:*</label>
              <InputText
              name='firstLastName'/>
            </div>
            <div className='col-md-6'>
              <label htmlFor='secondLastName'>Segundo apellido:*</label>
              <InputText
              name='secondLastName'/>
            </div>
            <div className='col-md-6'>
              <label htmlFor='companyName'>Nombre compañia:*</label>
              <InputText
              name='companyName'/>
            </div>
            <div className='col-md-6'>
              <label htmlFor='email'>Correo:*</label>
              <InputText
              name='email'/>
            </div>
            <div className='col-md-6'>
              <label>Permite mensajes de texto</label>
              <input className="tgl tgl-light" id="msm" type="checkbox"/>
              <label className="tgl-btn" htmlFor="msm"></label>
            </div>
            <div className='col-md-6'>
              <label>Permite envio de correo</label>
              <input className="tgl tgl-light" id="allowEmail" type="checkbox"/>
              <label className="tgl-btn" htmlFor="allowEmail"></label>
            </div>
            <div className='col-md-6'>
              <div className='my-2'></div>
              <ButtonSuccess
                title="Continuar >"
                searchByNit={this.saveCompanyHandleClick}
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
    );
  }
  //let nit=document.getElementById("nitCompany").value
  async getCompanyByNit(nit){
    const response = await fetch('api/company/'+nit);
    const data = await response.json();
    if(response.ok){
      document.getElementById("idCompany").value = data.idCompany;
      document.getElementById("identificationType").value = data.identificationType;
      document.getElementById("identificationNumber").value = data.identificationNumber;
      document.getElementById("firstName").value = data.firstName;
      document.getElementById("secondName").value = data.secondName;
      document.getElementById("firstLastName").value = data.firstLastName;
      document.getElementById("secondLastName").value = data.secondLastName;
      document.getElementById("companyName").value = data.companyName;
      document.getElementById("email").value = data.email;
      document.getElementById("msm").checked  = data.allowMsm;
      document.getElementById("allowEmail").checked  = data.allowEmail;
    }
  }

}
