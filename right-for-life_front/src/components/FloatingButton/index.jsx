import React from "react";
import { Link } from "react-router-dom";
import './style.css'

class Index extends React.Component {
  render() {
    const {icon, position = 'left-0', onClick, isBackBtn} = this.props;
    const className = `floating-button float-right absolute z-10 bg-white hover:bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer shadow-xl text-gray-700 text-lg ${position}`;
    const iconElem = <i className={`fas ${icon}`}/>;

    return isBackBtn && window.history.length === 1 ? (
        // Link used to make possible redirect to home
        <Link
          className={className}
          to="/">
          {iconElem}
        </Link>) :
      (
        <div onClick={isBackBtn ? () => window.history.back() : onClick} className={className}>
          {iconElem}
        </div>
      );
  }
}


export default Index;
