import { Container, Divider, Link, Typography } from "@mui/material";

import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <Container
      sx={{
        mt: 8,
      }}
    >
      <Typography variant="h2">Projects</Typography>
      <Typography variant="body1">
        Check out projects I felt deserved a Github Pages 👁️
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Projects />
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1">
        🪦 Check out the full graveyard at my{" "}
        <Link
          aria-label="Link to Joshua's full Github repositories"
          color="secondary"
          href="https://github.com/jwu910?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
          title="Github Repositories"
        >
          Github Repositories
        </Link>
      </Typography>
    </Container>
  );
};

export default ProjectsPage;
