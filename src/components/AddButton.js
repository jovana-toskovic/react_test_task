import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import { addItem } from './../actions/listItemsActions'


class AddButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
      addingItem: false,
    }
  }

  handleAddingItem(e){
    e.preventDefault()
    if (!this.state.addingItem){
      this.setState({addingItem: true})
    } else {
      this.props.addItem(this.state.item)
      this.setState({addingItem:false})
    }

  }

  handleInputChange(e){
    let newItem = {}
    newItem.text = e.target.value
    newItem.status = false
    this.setState({item: newItem})
  }

  render(){

    return (
      <Fragment>
        <form className="mt-2">
        {
        this.state.addingItem ? 
        
          <div className="form-group">
            <input onChange={(e) => {this.handleInputChange(e)}} type="new_item" className="form-control form-control-lg" placeholder="Enter new item" />
          </div>
         
        : null 
      }
      <button type="submit" onClick={(e) => {this.handleAddingItem(e)}} className="btn btn-lg btn-outline-secondary d-flex mt-2 ml-auto">
        {this.state.addingItem ? "Add Item" : "New item"}
      </button>
      </form>
      </Fragment>
    )
    
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems.items
  }
}

export default connect(mapStateToProps, {addItem})(AddButton)
