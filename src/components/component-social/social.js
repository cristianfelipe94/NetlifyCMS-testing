import React from "react";
import PropTypes from "prop-types"
import "./social.scss";

const Social = ({platform, action}) => {
  return(
    <button className={`social social--${platform}`} onClick={action}></button>
  );
};

Social.defaultProps = {
  platform: "facebook",
}

Social.propTypes = {
  platform: PropTypes.string,
}

export default Social;