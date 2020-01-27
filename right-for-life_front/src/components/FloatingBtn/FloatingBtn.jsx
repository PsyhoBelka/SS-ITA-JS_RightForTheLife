import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import PropTypes from "prop-types"

export const FloatingBtn = ({icon, position, onClick, url}) => {
  const className = `floating-button float-right absolute z-10 bg-white hover:bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer shadow-xl text-gray-700 text-lg ${position}`;
  const iconElem = <i className={`fas ${icon}`}/>;

  return onClick ? <div onClick={onClick} className={className}>{iconElem}</div>
    : <Link className={className} to={url}>{iconElem}</Link>
};

FloatingBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  position: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
};

FloatingBtn.defaultProps = {
  position: 'left-0',
};