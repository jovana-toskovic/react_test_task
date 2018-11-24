import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'


class EditButton extends Component {
  constructor(props){
    super(props);
    this.state = {
 

    }
  }



  render(){
    return (

      <Fragment>

        <button className="btn btn-link">
          <FontAwesomeIcon className="text-dark" icon={faPencilAlt}/>
        </button>

      </Fragment>
    )
  }
}

export default EditButton;

