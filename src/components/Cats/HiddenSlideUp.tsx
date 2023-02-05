import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { FooterContext } from "../Footer";

import "./HiddenSlideUp.scss";
interface IProps {
  catName: "zeebo" | "zuko";
  containerWidth: number | string;
  end: number;
  imgHeight: number | string;
  imgPath: string;
  imgWidth: number | string;
  placement: "left" | "right";
  start: number;
}
// ...(Array.isArray(sxProps) ? sxProps : [sxProps]),
const HiddenSlideUp = (props: IProps) => {
  const footerContext = useContext(FooterContext);

  useEffect(() => {
    const image = new Image();
    image.src = props.imgPath;
  }, [props.imgPath]);

  const positionProps = {
    ...(props.placement === "left" ? { left: 0 } : { right: 0 }),
  };

  return (
    <>
      <Box
        onMouseEnter={() => {
          props.catName === "zeebo"
            ? footerContext.setZeebo(props.end)
            : footerContext.setZuko(props.end);
        }}
        onMouseLeave={() => {
          props.catName === "zeebo"
            ? footerContext.setZeebo(props.start)
            : footerContext.setZuko(props.start);
        }}
        className="hidden-slide-up"
        sx={{
          bottom: props.end,
          height: "105px",
          position: "fixed",
          width: props.containerWidth,
          zIndex: 1000,
          ...positionProps,
        }}
        title={`${props.catName}`}
      />
      <Box
        alt={`Josh's cat ${props.catName}`}
        className="cat-outline"
        component="img"
        src={props.imgPath}
        bottom={
          props.catName === "zeebo" ? footerContext.zeebo : footerContext.zuko
        }
        sx={{
          bottom:
            props.catName === "zeebo"
              ? footerContext.zeebo
              : footerContext.zuko,
          height: props.imgHeight,
          position: "fixed",
          transition: "bottom 1s ease-in-out",
          width: props.imgWidth,
          zIndex: 100,
          ...positionProps,
        }}
      />
    </>
  );
};

export default HiddenSlideUp;
