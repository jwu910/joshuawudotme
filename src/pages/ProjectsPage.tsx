import { Box, Container } from "@mui/material";

const ProjectsPage = () => {
  // get projects from github api
  // filter projects with pages
  // list out projects
  return (
    <>
      <Container
        sx={{
          display: "flex",
          height: "auto",
          mt: 8,
        }}
      >
        <Box sx={{ margin: "auto" }}>
          <a href="https://emoji.gg/emoji/3578_sus">
            <img
              src="https://cdn3.emoji.gg/emojis/3578_sus.png"
              width="64px"
              height="48px"
              alt="sus"
            />
          </a>
        </Box>
      </Container>
    </>
  );
};

export default ProjectsPage;
