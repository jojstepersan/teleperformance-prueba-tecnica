import React, { Component } from 'react';

export class InputNumber extends Component {

  render(){
    return (<input className='form-control'
              type='number'
              name={this.props.name}
              id={this.props.name}
            />
          );
  }
}
