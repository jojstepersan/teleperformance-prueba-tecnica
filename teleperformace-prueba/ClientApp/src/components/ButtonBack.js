import React, { Component } from 'react';
import '../assets/css/Buttons.css'

export class ButtonBack extends Component {

  render(){
    return (
      <a href="#" className="btn btn-secondary btn-icon-split btn-success-tp"  >
          <span className="icon text-white-50">
              <i className="fas fa-check"></i>
          </span>
          <span className="text">{this.props.title}</span>
      </a>
    );
  }
}
