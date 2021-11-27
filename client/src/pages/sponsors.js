import React, { useState } from "react";
import "./sponsorsLogo.css";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
import Img4 from "../img/img4.jpg";
import Img5 from "../img/img5.jpg";
import Img6 from "../img/img6.jpg";

const Sponsors = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];

  const [model, setModel] = useState(false);
  const tempingSrc = useState("");

  const getImg = (id) => {
    setModel(true);
    if (id == 1) {
      window.open("https://www.adidas.com", "_blank");
    } else if (id == 2) {
      window.open("https://www.puma.com", "_blank");
    } else if (id == 3) {
      window.open("https://www.asu.edu", "_blank");
    } else if (id == 4) {
      window.open("https://www.nfl.com", "_blank");
    } else if (id == 5) {
      window.open("https://www.azcardinals.com", "_blank");
    } else {
      window.open("https://www.apple.com", "_blank");
    }
  };

  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.id)}>
              <img
                src={item.imgSrc}
                style={{
                  width: "450px",
                  cursor: "pointer",
                }}
                alt="sponcer logos"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sponsors;
