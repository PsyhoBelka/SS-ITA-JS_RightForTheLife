import React from "react";
import Card from './Card';
import FloatingButton from '../../components/FloatingButton'
import { useHistory } from "react-router-dom";
import './style.css'

export class AnimalDetails extends React.Component {
  // todo: animations, css
  render() {
    const {description} = this.props;

    return (
      <div className="relative">
        <FloatingButton icon="fa-arrow-left" isBackBtn={true}/>
        <FloatingButton icon="fa-share-alt" position="right-0"/>

        <div className="flex mx-auto px-4" style={{maxWidth: '800px'}}>
        <Card {...this.props} />

        <div className="w-1/2 my-5 mx-12 font-medium text-gray-700">
          {description}
        </div>
      </div>
      </div>
    )
  }
}


