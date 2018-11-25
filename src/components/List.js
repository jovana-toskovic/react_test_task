import React, { Component, Fragment } from 'react';
import ListItem from './ListItem'
import AddButton from './AddButton'

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
            <ListItem />
            <AddButton />
          </div>
        </div>
      </div>  

    )
  }
}

export default List;