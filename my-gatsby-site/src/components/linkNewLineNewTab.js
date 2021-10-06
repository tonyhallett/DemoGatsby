import * as React from "react"
const LinkNewLineNewTab = props => {
    return <>
    <a href={props.href} rel="noreferrer"  target="_blank">{props.title}</a>
    <br/>
    </>
  }

  export default LinkNewLineNewTab