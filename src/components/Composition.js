import React from 'react'
import Tooltip from './Tooltip'

function Composition() {
  return (
    <div>
      <Tooltip text="Heading tooltip">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Paragraph tooltip">
        <p>Hover over this paragraph</p>
      </Tooltip>
    </div>
  )
}

export default Composition