import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "inline",
        position: "absolute",
        bottom: 0,
        width: "100vw",
      }}
    >
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Typography sx={{ margin: "auto" }} variant="body1">
          Built with 😻 | Supported by Zeebo and Zuko | &copy; 2016 -{" "}
          {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
