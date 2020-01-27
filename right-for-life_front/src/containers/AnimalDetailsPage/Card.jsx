import React from 'react';
import calcAge from '../../helpers/calcAge';

class Card extends React.Component {


  render() {
    const {name, age, photos, gender, breed} = this.props;

    return (
      <li className="animal-details-card w-1/2 flex flex-col">
        <div className="z-0 pointer">
          <div className="rounded-xl shadow-md overflow-hidden">
            <img className="animal-details-card__pet-img cursor-pointer w-full h-full object-cover object-center" onClick={this.handleImgClick} src={photos[0]} alt="Фото питомца"/>

          </div>
        </div>
        <div className="w-11/12 p-4 bg-white text-gray-700 uppercase shadow-xl rounded-b-xl self-center">
          {this.props.emergency ? <div>
              <p className="font-bold text-lg float-left">{name}</p>

              <button onClick={this.handlePickUpPetClick}
                      className={`animal-details__btn w-full font-bold py-2 px-2 rounded-xl mt-2 focus:outline-none bg-green-300 hover:bg-green-400 text-green-700`}>
                Помочь
              </button>
            </div> :
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">{name}</p>
                <p className="text-2xl">
                  {gender === 'М' ? <i className="fas fa-mars"/> : <i className="fas fa-venus"/>}
                </p>
              </div>

              <div className="flex justify-between text-sm items-center">
                <p className="font-medium">{breed}</p>
                <p className="font-medium">{calcAge(age)}</p>
              </div>

              <button onClick={this.handlePickUpPetClick}
                      className={`animal-details__btn w-full font-bold py-2 px-2 rounded-xl mt-2 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700`}>
                Приютить
              </button>
            </div>
          }
        </div>
      </li>
    );
  }


  handleImgClick = () => {

  };

  handlePickUpPetClick = () => {

  };
}

export default Card;