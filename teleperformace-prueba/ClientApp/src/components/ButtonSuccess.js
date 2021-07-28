import React, { Component } from 'react';
import '../assets/css/Buttons.css'
export class ButtonSuccess extends Component {


  render(){
    return (
      <a href="#" className="btn btn-danger btn-icon-split btn-success-tp"
      onClick={this.props.searchByNit}
      >
          <span className="icon text-white-50">
              <i className="fas fa-check"></i>
          </span>
          <span className="text">{this.props.title}</span>
      </a>
    );
  }
}
