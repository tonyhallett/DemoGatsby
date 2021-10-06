import * as React from "react"

const LinkNewTab = props => {
    return <a href={props.href} rel="noreferrer"  target="_blank">{props.title}</a>
  }

export default LinkNewTab