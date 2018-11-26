import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonWithIcon extends Component {

  render(){
    return (

      <button onClick={(e) => {this.props.handleButtonAction(this.props.argument)}} className={this.props.buttonClassName}>
        <FontAwesomeIcon className={this.props.fontClassName} icon={this.props.icon}/>
      </button>
    )
  }
}

export default ButtonWithIcon;
