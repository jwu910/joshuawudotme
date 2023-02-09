import zuko from "../../assets/zuko.png";
import HiddenSlideUp from "./HiddenSlideUp";

// TODO: Bounce zuko after delay
const ZukoPopup = () => {
  return (
    <>
      <HiddenSlideUp
        catName="zuko"
        containerWidth="125px"
        end={-5}
        imgPath={zuko}
        imgWidth="110px"
        imgHeight="70px"
        placement="right"
        start={-80}
      />
    </>
  );
};
export default ZukoPopup;
