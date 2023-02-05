import zeebo from "../../assets/zeebo.png";
import HiddenSlideUp from "./HiddenSlideUp";

// TODO: Bounce zeebo after delay
const ZeeboPopup = () => {
  return (
    <>
      <HiddenSlideUp
        catName="zeebo"
        containerWidth="105px"
        end={0}
        imgPath={zeebo}
        imgWidth="100px"
        placement="left"
        imgHeight="100px"
        start={-100}
      />
    </>
  );
};
export default ZeeboPopup;
