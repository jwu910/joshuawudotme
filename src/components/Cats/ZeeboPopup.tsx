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
        imgWidth="150px"
        placement="left"
        imgHeight="150px"
        start={-145}
      />
    </>
  );
};
export default ZeeboPopup;
