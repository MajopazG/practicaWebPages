import React from 'react'

export const Anchor = ({textButton, event}) => {
  return (
    <>
      <div> 
        <button onClick={event}> {textButton} </button>
      </div>
    </>  
  )
}
