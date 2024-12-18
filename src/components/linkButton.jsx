import React from "react";
import '../styles/linkButton.css'

const LinkButton = ({href, id, title, icon}) => {
  return (
    <a href={href} id={id} title={title}>
    <i className={icon}></i>
    </a>
  )

}

export default LinkButton