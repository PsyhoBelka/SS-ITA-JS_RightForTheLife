import React from "react";
import { LoadIndicator } from '../components/LoadIndicator'


export const preloader = ({MainComponent, LoadingComponent, checkLoadingFunc, loadDataAction,}) => {
  return ({dispatch, ...props}) => {
    if (checkLoadingFunc(props)) {
      return <MainComponent {...props} />
    } else {
      dispatch(loadDataAction());
      return <LoadIndicator />
    }
  };
};


