import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import {connect} from 'react-redux'
import { quitDeleteItem, deleteListItem } from './../actions/listItemsActions'


class DeleteModal extends Component {

  render(){

    return (

      <div>
        <Modal show={this.props.click} className="d-flex align-items-center" style={modalStyle}>

          <Modal.Body className="list-group-item-danger">Are you sure you want to delete this item?</Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-light" onClick={() => {this.props.quitDeleteItem()}}>No!</button>
            <button type="button" className="btn btn-secondary" onClick={() => {this.props.deleteListItem(this.props.itemId)}}>Sure!</button>
          </Modal.Footer>

        </Modal>
      </div>
      

    )
  }
}

const mapStateToProps = (state) => {

  return {
    click: state.listItems.clickDelete,
    itemId: state.listItems.itemId,
    items: state.listItems.items
  }
}



export default connect(mapStateToProps, {quitDeleteItem, deleteListItem})(DeleteModal)


const modalStyle = {
  opacity: 1
};

