import React from 'react'

const VisitorBox = (props) => {
  return (
    <div className="visitorDiv">
      {/* className={this.props.name} */}
      <img src={props.visitor.img} alt={props.visitor.name} className="visitorIMG"/><br />
      <label>{props.visitor.name}</label><br />
      <input type="checkbox" id={props.visitor.name} onChange={props.handleOnChange}/>
    </div>
  )
}

export default VisitorBox
