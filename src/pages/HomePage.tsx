import { Box, Stack, Typography, useTheme } from "@mui/material";
import profile from "../assets/profile.jpg";

const HomePage = () => {
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
        <Box
          alt="profile photo"
          component="img"
          src={profile}
          sx={{
            height: 200,
            width: 200,
            borderRadius: "50%",
            m: "auto",
            boxShadow: `0 0 12px ${theme.palette.primary.main}`,
          }}
        />
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Hello Nerds, I'm Josh
        </Typography>
      </Stack>
    </Box>
  );
};

export default HomePage;
