import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'



class ToggleButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOn: false

    }
  }

  handleToggleButton(e){
    this.setState((prevState) => ({isOn: !prevState.isOn}))
  }

  render(){
    return (

      <Fragment>

      <button onClick={(e) => {this.handleToggleButton(e)}} className="rounded-circle border-dark btn btn-sm">
        <FontAwesomeIcon className={`text-${this.state.isOn ? "dark" : "white"}`} icon={faCircle}/>
      </button>

      </Fragment>
    )
  }
}

export default ToggleButton;


