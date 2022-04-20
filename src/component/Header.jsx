import React from 'react'

function Header({to}) {
    
  /* return <div>Header {to}</div> */
  return React.createElement("div", null, `Header ${to}`)
}

export default Header

//Ha kitöröljük a return után () és 1 sorban van a return és a div, akkor is működik
//Matematikai műveleteknél is pl. (3+5)*2