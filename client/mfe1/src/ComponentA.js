import React from 'react'

const ComponentA = () => {
  function clickButton(e){
    console.log("MFE1 Button clicked!", e)
  }

  return (
    <div>
        <button onClick={clickButton}>Component A from MFE1</button>
    </div>
  )
}

export default ComponentA