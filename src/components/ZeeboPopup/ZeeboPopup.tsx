import { Box } from "@mui/system";
import { useContext } from "react";
import zeebo from "../../assets/zeebo.png";
import { FooterContext } from "../Footer";
import "./ZeeboPopup.scss";

// TODO: Bounce zeebo after delay
const ZeeboPopup = () => {
  const footerContext = useContext(FooterContext);

  return (
    <>
      <Box
        onMouseEnter={() => {
          footerContext.setZeebo(0);
        }}
        onMouseLeave={() => {
          footerContext.setZeebo(-100);
        }}
        className="zeebo_container"
        sx={{
          bottom: 0,
          height: "105px",
          left: 0,
          position: "fixed",
          width: "105px",
          zIndex: 1000,
        }}
        title="Zeebo"
      />
      <Box
        alt="Josh's cat zeebo"
        className="zeebo_image"
        component="img"
        src={zeebo}
        bottom={footerContext.zeebo}
        sx={{
          bottom: footerContext.zeebo,
          height: "100px",
          position: "fixed",
          width: "100px",
          zIndex: 100,
          transition: "bottom 1s ease-in-out",
        }}
      />
    </>
  );
};
export default ZeeboPopup;
