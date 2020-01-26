import React from "react";


export const preloader = ({MainComponent, LoadingComponent, checkLoadingFunc, loadDataAction,}) => {
  return ({dispatch, ...props}) => {
    if (checkLoadingFunc(props)) {
      return <MainComponent {...props} />
    } else {
      dispatch(loadDataAction());
      return <LoadingComponent {...props} />
    }
  };
};


