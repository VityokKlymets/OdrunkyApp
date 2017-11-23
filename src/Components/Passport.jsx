import React from "react";
import pupilImg from "../Content/Images/Icons/ic_people_48px.svg";
import schoolImg from "../Content/Images/Icons/ic_school_48px.svg";
import bsnImg from "../Content/Images/Icons/ic_business_center_48px.svg";
import PassportBlock from './PassportBlock';
class Passport extends React.Component {
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
          return <PassportBlock image = {data.image} count = {data.count} description={data.description} key={idx}/> 
        })}
      </div>
    );
  }
}

export default Passport;
