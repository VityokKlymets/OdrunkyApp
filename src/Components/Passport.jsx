import React from "react";
import pupilImg from "../Content/Images/Icons/ic_people_48px.svg";
import schoolImg from "../Content/Images/Icons/ic_build_48px.svg";
import bsnImg from "../Content/Images/Icons/ic_business_center_48px.svg";
import PassportBlock from './PassportBlock';
class Passport extends React.Component {
  render() {
    const renderData = [
      {
        description: "Кількість учнів",
        count: 99,
        image: pupilImg
      },
      {
        description: "Кількість вчителів",
        count: 19,
        image: bsnImg
      },
      {
        description: "Кількість персоналу",
        count: 22,
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
