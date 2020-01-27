import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";
import PropTypes from "prop-types";

export const ShareBtn = ({position, shareUrl}) => (
  <FloatingBtn
    icon="fa-share-alt"
    position={position}
    onClick={() => null}
  />
);

ShareBtn.propTypes = {
  shareUrl: PropTypes.string,
};

ShareBtn.defaultProps = {
  shareUrl: window.location.href,
};
