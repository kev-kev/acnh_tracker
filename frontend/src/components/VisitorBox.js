import React from 'react'

const VisitorBox = (props) => {
  return (
    <div className="visitorDiv">
      {/* className={this.props.name} */}
      <img src={props.visitor.img} alt={props.visitor.name} className="visitorIMG"/><br />
      <input type="checkbox" id={props.visitor.name} onChange={props.handleOnChange}/><br />
      <label>{props.visitor.name}</label>
    </div>
  )
}

export default VisitorBox
