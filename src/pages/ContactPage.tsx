import { Box, Stack, useTheme } from "@mui/material";
import { createRef } from "react";

const ContactPage = () => {
  const widgetRef = createRef();
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "block",
        height: "100%",
        minHeight: "100%",
        justifyContent: "space-around",
        p: 4,
      }}
    >
      <Stack spacing={3}>
      </Stack>
    </Box>
  );
};

export default ContactPage;
