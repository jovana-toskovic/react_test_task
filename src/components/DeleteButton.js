import React, { Component } from 'react';

import ButtonWithIcon from './ButtonWithIcon';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import { tryDeleteItem } from './../actions/listItemsActions';


class DeleteButton extends Component {

  render(){

    return (

      <ButtonWithIcon 
        handleButtonAction={(e) => {this.props.tryDeleteItem(this.props.item.id)}} 
        argument={this.props.item.id} 
        buttonClassName={`btn btn-link ${this.props.item.status ? "disabled" : ""}`} 
        fontClassName={"text-dark"}
        icon={faTrashAlt} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {tryDeleteItem})(DeleteButton)


