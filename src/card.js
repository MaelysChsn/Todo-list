import React, { useState } from 'react'

export default function Card({title, content, index, onRemove, onChecked, checked}){

  return (
    <>
    <div className="card col" key={index}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button type="button" className="btn btn-danger" onClick={() => onRemove(index)}>Delete</button>
        {
          checked === false ? <button type="button" className="btn btn-warning" onClick={() => onChecked(index, true)}>À faire</button>
        : <button type="button" className="btn btn-success" onClick={() => onChecked(index, false)}>Fait</button>
        }

      </div>
    </div>
    </>
  )
}
