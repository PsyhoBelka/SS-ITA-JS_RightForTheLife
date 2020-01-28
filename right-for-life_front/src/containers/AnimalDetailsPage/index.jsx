import React from "react";
import { connect } from 'react-redux';
import { getAnimalsData, getEmergencyData } from "../../actions";
import { AnimalDetails } from "./AnimalDetails.jsx";
import preloader from "../../decorators/preloader.jsx";
import queryString from "query-string"
import { NotFoundPage } from "../NotFoundPage";
import CSSTransition from 'react-addons-css-transition-group';
import './style.css'
import PreloadImg from "../../decorators/PreloadImg.jsx";

// todo: calculate  and format age
// todo: big image
// todo: share button (click on float button shows buttons with social networks
// todo: забрать and помочь actions
// todo: images slider

class AnimalDetailsWithPetObj extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.location.search !== nextProps.location.search
  }

  render() {
    window.scrollTo({top: 0, behavior: 'smooth'});

    const petId = this.props.match.params.id;
    const petObj = this.props.animalsArr.find(animal => String(animal.id) === petId);

    return petObj ?
      <PreloadImg imgSrc={petObj.photos[0]} OriginalComponent={(<CSSTransition
        transitionName="animal-details-card"
        transitionAppear={true}
        transitionAppearTimeout={200}
        transitionEnter={false}
        transitionLeave={false}>
        <AnimalDetails {...petObj} emergency={this.props.emergency}/>
      </CSSTransition>)}/> : <NotFoundPage/>
  }
}

export const AnimalDetailsPage = connect((state, props) => ({
  animalsArr: props.emergency ? state.emergencyData.arr : state.animalsData.arr,
}))(preloader({
  MainComponent: AnimalDetailsWithPetObj,
  checkLoadingFunc: props => Array.isArray(props.animalsArr),
  loadDataAction: props => props.emergency ? getEmergencyData : getAnimalsData,
}));