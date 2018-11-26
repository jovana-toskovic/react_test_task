import React, { Component, Fragment } from 'react';

class FormWithInput extends Component{

  render(){

    return (

      <Fragment>

        <button onClick={(e) => {this.props.handleQuit(e)}}  type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <form onSubmit={(e) => {this.props.handleSubmit(e)}}>
          <div className="form-group">
            <input onChange={(e) => {this.props.handleInputChange(e)}} type="new_item"
            className="form-control form-control-lg" placeholder="Enter new item"
            value={this.props.value }
            />
          </div>
        </form>

      </Fragment>
    )
  }
}

export default FormWithInput;

