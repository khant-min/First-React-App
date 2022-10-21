import main_pic_1 from "./images/image-product-1.jpg";
import main_pic_2 from "./images/image-product-2.jpg";
import main_pic_3 from "./images/image-product-3.jpg";
import main_pic_4 from "./images/image-product-4.jpg";
import pic_1 from "./images/image-product-1-thumbnail.jpg";
import pic_2 from "./images/image-product-2-thumbnail.jpg";
import pic_3 from "./images/image-product-3-thumbnail.jpg";
import pic_4 from "./images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const MainLeft = () => {
  const [mainPic, setMainPic] = useState(main_pic_1);
  const [style, setStyle] = useState(false);

  const picChanger = pic => {
    setStyle(true);
    switch (pic) {
      case pic_1:
        setMainPic(main_pic_1);
        break;
      case pic_2:
        setMainPic(main_pic_2);
        break;
      case pic_3:
        setMainPic(main_pic_3);
        break;
      case pic_4:
        setMainPic(main_pic_4);
        break;
    }
  };

  return (
    <div className="MainLeft">
      <div className="main_pic">
        <img src={mainPic} />
      </div>
      <div className="thumbnail-images">
        <img src={pic_1} onClick={() => picChanger(pic_1)} />
        <img src={pic_2} onClick={() => picChanger(pic_2)} />
        <img src={pic_3} onClick={() => picChanger(pic_3)} />
        <img src={pic_4} onClick={() => picChanger(pic_4)} />
      </div>
    </div>
  );
};

export default MainLeft;
