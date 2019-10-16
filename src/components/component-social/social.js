import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames"
import "./social.scss";

const Social = ({platform, action, type, customStyle}) => {
  const mainClassNames = classNames(
    `social social--${platform} ${customStyle}`
  )
  return(
    <button className={mainClassNames} onClick={action} type={type}/>
  );
};

Social.defaultProps = {
  platform: "facebook",
  action: () => {console.log("Default social media icon was clicked.")},
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  customStyle: "",
}

Social.propTypes = {
  platform: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  customStyle: PropTypes.string,
}

export default Social;