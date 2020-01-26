import React from "react";
import calcAge from "../../helpers/calcAge.js";
import Card from './Card';

export class AnimalDetails extends React.Component {
  // todo: animations, css
  render() {
    const {name, age, photos, type, gender, description} = this.props;

    return (
      <div className="bg-lightgray-100 min-h-screen pb-2 self-center flex" style={{maxWidth: '800px', paddingTop: '65px'}}>
        <Card {...this.props} />

        <div className="w-1/2">
          {description}
        </div>
      </div>
    )
  }
}


