import React from "react";
import { connect } from 'react-redux';
import { getAnimalsData } from "../../actions";
import { AnimalDetails } from "./AnimalDetails.jsx";
import { preloader } from "../../decorators/Preloader.jsx";
import queryString from "query-string"

class AnimalDetailsWithPetObj extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.location.search !== nextProps.location.search
  }

  render() {
    // todo: scroll to top via Router
    window.scrollTo({top: 0, behavior: 'smooth'});

    const petId = +queryString.parse(this.props.location.search).id;
    const petObj = this.props.animalsArr.find(animal => animal.id === petId);

    // todo: open 404 page via Router
    if(!petObj) { window.location.href = '/404' }

    return <AnimalDetails {...petObj} />
  }
}

export default connect((state) => ({
  animalsArr: state.animalsData.arr,
}))(preloader({
  MainComponent: AnimalDetailsWithPetObj,
  checkLoadingFunc: props => Array.isArray(props.animalsArr),
  loadDataAction: getAnimalsData
}))