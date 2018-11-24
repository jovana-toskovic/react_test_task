import React, { Component, Fragment } from 'react';
import ToggleButton from './ToggleButton'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
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

              <li className="list-group-item ">
                <div className="row">
                  <div className="col-2 d-flex align-items-center">
                    <ToggleButton />
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <p className="m-0">Read</p>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <EditButton />
                    <DeleteButton />
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>  

    )
  }
}

export default List;