import React from 'react'

const Togglebutton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      Togglebutton
    </button>
  )
}

export default Togglebutton
