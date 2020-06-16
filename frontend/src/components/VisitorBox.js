import React from 'react'

const VisitorBox = (props) => {

// switch img with avatar and use box!
  return (
    <div className="visitorDiv">
      <img src={props.visitor.img} alt={props.visitor.name} className="visitorIMG"/><br />
      <label>{props.visitor.name}</label><br />
      <input type="checkbox" id={props.visitor.name} onChange={props.handleOnChange}/>
    </div>
  )
}

export default VisitorBox
