import React from "react";
import pupilImg from "../Content/Images/Icons/ic_people_48px.svg";
import schoolImg from "../Content/Images/Icons/ic_school_48px.svg";
import bsnImg from "../Content/Images/Icons/ic_business_center_48px.svg";
class Passport extends React.Component {
  RenderBlock(description, count, image,key) {
    return (
      <div className="pass-block" key={key}>
        <h3>{description}</h3>
        <div
          className="pass-img"
          style={{ backgroundImage: `url(${image})` }}
        />
        <span>{count}</span>
      </div>
    );
  }

  render() {
    const renderData = [
      {
        description: "Кількість учнів",
        count: 100,
        image: pupilImg
      },
      {
        description: "Кількість вчителів",
        count: 34,
        image: bsnImg
      },
      {
        description: "Кількість чогось там",
        count: 100,
        image: schoolImg
      }
    ];
    return (
      <div className="Passport">
        {renderData.map((data, idx) => {
          return this.RenderBlock(data.description, data.count, data.image,idx);
        })}
      </div>
    );
  }
}

export default Passport;
