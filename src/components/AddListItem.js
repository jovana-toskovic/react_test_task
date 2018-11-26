import React, { Component, Fragment } from 'react';

import FormWithInput from './FormWithInput';

import { connect } from 'react-redux';
import { addItem } from './../actions/listItemsActions';

class AddListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
      addingItem: false,
    }
  }

  handleToggleAddButton(){
    this.setState((prevState) => ({
      addingItem: !prevState.addingItem
    }))
  }

  handleAddingItem(e){
    e.preventDefault()
    this.props.addItem(this.state.item)
    this.handleRemoveInput()
  }

  handleRemoveInput(){
    this.setState({addingItem: false})
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

        {
          this.state.addingItem ? 
          
            <FormWithInput 
              handleQuit={(e) => {this.handleRemoveInput(e)}} 
              handleSubmit={(e) => {this.handleAddingItem(e)}} 
              handleInputChange={(e) => {this.handleInputChange(e)}}
            />
           
            : null 
        }

        {  !this.state.addingItem ?

          <button type="button" onClick={(e) => {this.handleToggleAddButton(e)}} className="btn btn-lg btn-outline-secondary d-flex mt-2 ml-auto">
           New Item
          </button> :
          null
        }

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems.items
  }
}

export default connect(mapStateToProps, {addItem})(AddListItem)
