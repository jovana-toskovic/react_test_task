import React, { Component, Fragment } from 'react';

import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ListItems from './ListItems';
import AddListItem from './AddListItem';
import DeleteModal from './DeleteModal';

class List extends Component {

  render(){

    return(

      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-6">

            <h1 className="text-center">React test Task</h1>


            <ListItems />

            <DeleteModal />

            <AddListItem />
          
          </div>
        </div>
      </div>  
    )
  }
}

export default List;