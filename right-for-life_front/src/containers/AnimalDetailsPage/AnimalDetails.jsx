import React from "react";
import Card from './Card';
import {BackBtn, ShareBtn} from '../../components/FloatingBtn'
import './style.css'

export class AnimalDetails extends React.Component {
  render() {
    const {description} = this.props;

    return (
      <div className="relative">
        <BackBtn />
        <ShareBtn position="right-0"/>

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


