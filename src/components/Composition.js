import React from 'react'
import Tooltip from './Tooltip'

function Composition() {
  return (
    <div>
      <Tooltip Tag="h2" text="Tooltip for heading">
        Hover over this heading
      </Tooltip>

      <Tooltip Tag="p" text="Tooltip for paragraph">
        Hover over this paragraph
      </Tooltip>
    </div>
  )
}

export default Composition