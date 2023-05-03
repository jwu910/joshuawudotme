import { Container, Divider, Typography } from "@mui/material";

import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <Container
      sx={{
        mt: 8,
      }}
    >
      <Typography variant="h2">Projects</Typography>
      <Divider sx={{ my: 2 }} />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
