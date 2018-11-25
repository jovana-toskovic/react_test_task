import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import { changeItemStatus } from './../actions/listItemsActions'



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
    console.log(this.props.items)

    
  }

  render(){
    return (

      <Fragment>

      <button onClick={(e) => {this.handleToggleButton(this.props.item)}} className="p-0 px-1 rounded-circle border-dark btn btn-sm">
        <FontAwesomeIcon className={`text-${ this.props.item.status ? "dark" : "white"} p-0`} icon={faCircle}/>
      </button>

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems.items
  }
}

export default connect(mapStateToProps, {changeItemStatus})(ToggleButton)