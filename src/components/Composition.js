import React from 'react'
import Tooltip from './Tooltip'

function Composition() {
  return (
    <div style={{ padding: "40px" }}>
      <Tooltip text="This is a button tooltip">
        <button>Hover me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip on text">
        <span>Hover over this text</span>
      </Tooltip>
    </div>
  )
}

export default Composition