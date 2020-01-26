import React from "react";
import calcAge from "../../helpers/calcAge.js";

export class AnimalDetails extends React.Component {
  // todo: animations, css
  render() {
    const {petObj} = this.props;

    return (
      <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
        <div onClick={this.handleImgClick}>
          {petObj.photos.map(item => <img key={item} src={item} style={{height: '100px'}} alt="Фото питомца"/>)}
        </div>

        <p key="1">name: {petObj.name}</p>
        <p key="2">type: {petObj.type}</p>
        <p key="3">gender: {petObj.gender}</p>
        <p key="4">age: {calcAge(petObj.age)}</p>
        <p key="5">description: {petObj.description}</p>

        <button onClick={this.handlePickUpPetClick}>Забрать</button>
      </div>
    )
  }

  handlePickUpPetClick = () => {
    // todo: handlePickUpPetClick
    alert('open page/modal забрать питомца')
  };

  handleImgClick = () => {
    // todo: handleImgClick
    alert('open big image')
  };
}


