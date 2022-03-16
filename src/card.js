import React, { useState } from 'react'

export default function Card({title, content, index, onRemove}){

  const [checked, setChecked] = useState(false);

  return (
    <>
    <div className="card" key={index}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button type="button" className="btn btn-danger" onClick={() => onRemove(index)}>Delete</button>
        {
          checked === false ? <button type="button" className="btn btn-warning" onClick={() => setChecked(true)}>À faire</button>
          : <button type="button" className="btn btn-success" onClick={() => setChecked(false)}>Fait</button>
        }

      </div>
    </div>
    </>
  )
}
