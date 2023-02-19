import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import profile from "../assets/profile.jpg";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        height: "auto",
        mt: 8,
      }}
    >
      <Stack spacing={3} sx={{ m: "auto", display: "flex" }}>
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
          Hello Nerds, I&apos;m Josh
        </Typography>
      </Stack>
    </Container>
  );
};

export default HomePage;
