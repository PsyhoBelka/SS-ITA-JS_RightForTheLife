import React from 'react';
import calcAge from '../../../helpers/calcAge';
import './style.css'

class Index extends React.Component {


  render() {
    const {name, age, photos, gender, breed} = this.props;

    return (
      <li className="animal-details-card w-1/2 flex flex-col">
        <div className="z-40 pointer">
          <div className="rounded-xl shadow-md overflow-hidden">
            <img className="animal-details-card__pet-img cursor-pointer w-full h-full object-cover object-center"
                 onClick={this.handleImgClick} src={photos[0]} alt="Фото питомца"/>
          </div>
        </div>
        <div className="w-11/12 p-4 bg-white text-gray-700 uppercase shadow-xl rounded-b-xl self-center">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">{name}</p>
            <p className="text-xl">
              {gender === 'М' ? <i className="fas fa-mars"/> : <i className="fas fa-venus"/>}
            </p>
          </div>

          <div className="flex justify-between text-sm items-center">
            <p className="font-medium">{breed}</p>
            <p className="font-medium">{calcAge(age)}</p>
          </div>

          <button onClick={this.handlePickUpPetClick}
                  className="animal-details-card__btn w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-2 rounded-xl mt-2 focus:outline-none">
            Приютить
          </button>
        </div>
      </li>
    );
  }


  handleImgClick = () => {
    // todo: handleImgClick
    alert('open big image')
  };

  handlePickUpPetClick = () => {
    // todo: handlePickUpPetClick
    alert('open page/modal забрать питомца')
  };
}

export default Index;