import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("Click Function")
    const [key2, setKey2] = useState(0)
  return (
    <div>
        <button onClick={() => setKey1("Whatever")}>{key1}</button>
        <button onClick={() => setKey2(1)}>{key2}</button>
    </div>
  )
}

export default ButtonWithHooks