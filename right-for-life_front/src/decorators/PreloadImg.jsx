import React from "react";

class PreloadImg extends React.Component {
  state = {
    loaded: false,
  };

  render() {
    if(this.state.loaded) {
      return this.props.OriginalComponent
    } else {
      const img = document.createElement('img');
      img.src = this.props.imgSrc;
      img.onload = () => this.setState({loaded: true});

      return <div></div>
    }
  }
}

export default PreloadImg;