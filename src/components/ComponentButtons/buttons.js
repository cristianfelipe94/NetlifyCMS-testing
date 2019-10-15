import React from "react"
import PropTypes from "prop-types"
import "./buttons.scss"
import classNames from "classnames"

function Button({ children, button, type, action, customStyle }) {
  const mainClassNames = classNames(
    `btn btn--primary ${customStyle}`
  )
  const secondaryClassNames = classNames(
    `btn btn--secondary ${customStyle}`
  )
  const btnStyle = button === "primary" ? mainClassNames : secondaryClassNames
  return (
    <button className={btnStyle} type={type} onClick={action}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  action: () => console.log("Default function"),
  children: "Botón",
  customStyle: "",
  button: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["submit", "reset", "button"]),
}

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node,
  customStyle: PropTypes.string,
  button: PropTypes.string,
  type: PropTypes.string,
}

export default Button
