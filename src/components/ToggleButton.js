import React, { Component, Fragment } from 'react';

import ButtonWithIcon from './ButtonWithIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import { changeItemStatus } from './../actions/listItemsActions';



class ToggleButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: {}
    }
  }

  handleToggleButton(item){
    let newItem = {...item}
    this.state.item.status == undefined ? newItem.status = !item.status : newItem.status = !this.state.item.status
    this.setState({item: newItem}, () => {this.props.changeItemStatus(this.state.item)})
  }

  render(){

    return (

      <ButtonWithIcon 
        handleButtonAction={(e) => {this.handleToggleButton(this.props.item)}} 
        argument={this.props.item} 
        buttonClassName={"p-0 px-1 rounded-circle border-dark btn btn-sm"} 
        fontClassName={`text-${ this.props.item.status ? "dark" : "white"} p-0 align-middle`} 
        icon={faCircle} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems.items
  }
}

export default connect(mapStateToProps, {changeItemStatus})(ToggleButton)