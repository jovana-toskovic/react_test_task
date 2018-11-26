import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import { tryDeleteItem } from './../actions/listItemsActions'


class DeleteButton extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  handleClick(){
    this.props.tryDeleteItem(this.props.item.id)
  }

  render(){
    return (

      <Fragment>

        <button onClick={() => {this.handleClick()}}  className="btn btn-link">
          <FontAwesomeIcon className="text-dark" icon={faTrashAlt}/>
        </button>

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    click: state.listItems.clickDelete,
    items: state.listItems.items
  }
}

export default connect(mapStateToProps, {tryDeleteItem})(DeleteButton)


