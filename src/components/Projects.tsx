// import useGithubPages from "../hooks/use-github-pages";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Card, Tooltip, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

interface Repository {
  description: string;
  fork: boolean;
  has_pages: boolean;
  html_url: string;
  name: string;
  homepage: string;
}

const Projects = () => {
  const repositories = useLoaderData() as Repository[];

  return (
    <Box
      sx={{ m: { xs: 1, sm: 2 } }}
      display={{ xs: "block", sm: "flex" }}
      flex="0 1 auto"
      flexDirection="row"
      flexWrap="wrap"
    >
      {repositories
        // TODO: Filter at query
        .filter(
          (repository) =>
            !repository.fork && repository.has_pages && repository.homepage
        )
        .map((repository, index) => (
          <Box
            aria-label={`Visit the GitHub webpage for ${repository.name} which opens in a new window`}
            key={repository.name}
            component={Link}
            to={repository.html_url}
            rel="noreferrer noopener"
            sx={{ m: { xs: 1, sm: 2 } }}
            target="_blank"
            tabIndex={index}
          >
            <Tooltip
              key={repository.name}
              children={
                <Card
                  id={repository.name}
                  sx={{
                    display: "flex",
                    height: "100px",
                    mt: { xs: 1, sm: 2 },
                    p: 1,
                    width: { sm: "220px" },
                  }}
                >
                  <Typography
                    sx={{
                      my: "auto",
                      textAlign: "center",
                      width: "100%",
                    }}
                    variant="h5"
                  >
                    {repository.name}
                  </Typography>
                </Card>
              }
              // placement="bottom-start"
              title={
                <Box sx={{ display: "flex" }}>
                  <OpenInNewIcon
                    color="secondary"
                    sx={{ mx: 1, my: 0 }}
                    fontSize="small"
                  />
                  <Typography variant="body2">{repository.html_url}</Typography>
                </Box>
              }
            />
          </Box>
        ))}
    </Box>
  );
};

export default Projects;
