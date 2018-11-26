import React, { Component } from 'react';


import ToggleButton from './ToggleButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditListItem from './EditListItem';


import {connect} from 'react-redux';
import { allListItems } from './../actions/listItemsActions';


class ListItems extends Component {

  componentDidMount(){
    this.props.allListItems()
  }

  render(){
    return(
      <ul className="list-group">
        {
          this.props.items.map((item) => {
            
            return (

              <li key={item.id} className=
                {
                  `list-group-item ${item.status ? "list-group-item-secondary" : 
                  ""
                }`
              }>
                
                {
                  this.props.itemId == item.id && this.props.clickEdit ? 
                  
                    <EditListItem item={item} /> : 

                    <div className="row">
                      <div className="col-2 d-flex align-items-center">
                        <ToggleButton item={item} />
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <p className="m-0"><b>{item.text}</b></p>
                      </div>
                      <div className="col-3 d-flex align-items-center">
                        <EditButton item={item} />
                        <DeleteButton item={item} />
                      </div>
                    </div> 
                }

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
    items: state.listItems.items,
    itemId: state.listItems.itemId,
    clickEdit: state.listItems.clickEdit
  }
}

export default connect(mapStateToProps, {allListItems})(ListItems);