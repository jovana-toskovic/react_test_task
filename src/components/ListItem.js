import React, { Component } from 'react';
import ToggleButton from './ToggleButton'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import { allListItems } from './../actions/listItemsActions'


class ListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {}
  
    }
  }

  componentDidMount(){
    this.props.allListItems()
  }

  render(){
    return(
      <ul className="list-group">
        {
          this.props.items.map((item) => {
            return (
              <li className="list-group-item ">
                <div className="row">
                  <div className="col-2 d-flex align-items-center">
                    <ToggleButton />
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <p className="m-0">{item.item}</p>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <EditButton />
                    <DeleteButton />
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems.items
  }
}

export default connect(mapStateToProps, {allListItems})(ListItem)