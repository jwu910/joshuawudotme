import { Box } from "@mui/material";
import React from "react";

const CalendlyWidget = () => {
  return (
    <>
      <Box
        className="calendly-inline-widget"
        data-url="https://calendly.com/wujoshua/boba-talk-30-min"
        sx={{ minWidth: "320px", height: "630px" }}
      ></Box>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
};

export default CalendlyWidget;
