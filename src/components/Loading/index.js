import React from "react"
import spinner from "./images/spinner.svg"

function Loading({ ...other }) {
  return <img {...other} alt="Carregado..." src={spinner} />
}
export default Loading
