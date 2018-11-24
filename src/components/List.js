import React, { Component, Fragment } from 'react';
import ToggleButton from './ToggleButton'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'

class List extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){

    return(

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h1> This is a test.</h1>
            <ul className="list-group">
              <li className="list-group-item"> <ToggleButton /> </li>
            </ul>
          </div>
        </div>
      </div>  

    )
  }
}

export default List;