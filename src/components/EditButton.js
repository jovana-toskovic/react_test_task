import React, { Component, Fragment } from 'react';

import ButtonWithIcon from './ButtonWithIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import { tryEditItem } from './../actions/listItemsActions';


class EditButton extends Component {

  render(){
    return (
      <ButtonWithIcon 
        handleButtonAction={(e) => {this.props.tryEditItem(this.props.item.id)}} 
        argument={this.props.item.id} 
        buttonClassName={`btn btn-link ${this.props.item.status ? "disabled" : ""}`} 
        fontClassName={"text-dark"}
        icon={faPencilAlt} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, { tryEditItem })(EditButton)

