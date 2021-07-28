import React, { Component } from 'react';

export class InputText extends Component {

  render(){
    return (<input className='form-control'
              type='text'
              name={this.props.name}
              id={this.props.name}
            />
          );
  }
}
