import { Box, Stack, Typography, useTheme } from "@mui/material";
import CalendlyWidget from "../components/CalendlyWidget";

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around",
        p: 4,
      }}
    >
      <Stack spacing={3}>
        <CalendlyWidget />
      </Stack>
    </Box>
  );
};

export default ContactPage;
