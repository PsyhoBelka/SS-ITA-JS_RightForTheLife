import React from "react";
import { connect } from 'react-redux';
import { getAnimalsData } from "../../actions";
import { Loading } from "./Loading.jsx";
import { AnimalDetails } from "./AnimalDetails.jsx";
import { preloader } from "../../decorators/Preloader.jsx";
import queryString from "query-string"

class AnimalDetailsWithPetObj extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.location.search !== nextProps.location.search
  }

  render() {
    const petId = +queryString.parse(this.props.location.search).id;
    const petObj = this.props.animalsArr.find(animal => animal.id === petId);

    // todo: open 404 page if pet not found
    if(!petObj) { window.location.href = '/404' }

    return <AnimalDetails petObj={petObj}/>
  }
}

export default connect((state) => ({
  animalsArr: state.animalsData.arr,
}))(preloader({
  MainComponent: AnimalDetailsWithPetObj,
  LoadingComponent: Loading,
  checkLoadingFunc: props => Array.isArray(props.animalsArr),
  loadDataAction: getAnimalsData
}))