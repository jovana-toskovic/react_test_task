import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'


class DeleteButton extends Component {
  constructor(props){
    super(props);
    this.state = {
 

    }
  }



  render(){
    return (

      <Fragment>

        <button className="btn  btn-link">
          <FontAwesomeIcon className="text-dark" icon={faTrashAlt}/>
        </button>

      </Fragment>
    )
  }
}

export default DeleteButton;


