import React, { Component } from 'react';

import FormWithInput from './FormWithInput';

import {connect} from 'react-redux'
import { editListItem, quitEditItem } from './../actions/listItemsActions'


class EditListItem extends Component{

  constructor(props){
    super(props);
    this.state = {
      item: {
        text: this.props.item.text,
        status: this.props.item.status,
        id: this.props.item.id
      }
    }
  }

  handleInputChange(e){
    let newItem = {...this.state.item}
    newItem.text = e.target.value
    this.setState({item: newItem})
  }

  handleEditItem(e){
    e.preventDefault()
    this.props.editListItem(this.state.item)
  }

  render(){

    return (

      <FormWithInput 
        handleQuit={(e) => {this.props.quitEditItem()}} 
        handleSubmit={(e) => {this.handleEditItem(e)}} 
        handleInputChange={(e) => {this.handleInputChange(e)}}
        value={this.state.item.text}
      />

    )
  }
}


const mapStateToProps = (state) => {
  return {
    itemId: state.listItems.itemId
  }
}

export default connect(mapStateToProps, {editListItem, quitEditItem})(EditListItem)