import { Box, Stack, Typography } from "@mui/material";
import profile from "../assets/profile.jpg";

const HomePage = () => {
  return (
    <Box component="section">
      <Stack sx={{ m: "auto" }} spacing={3}>
        <Box
          alt="profile photo"
          component="img"
          src={profile}
          sx={{ height: 200, width: 200, borderRadius: "50%", m: "auto" }}
        />
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Hello Nerds, I'm Josh
        </Typography>
      </Stack>
    </Box>
  );
};

export default HomePage;
