import { Box, Link, Stack, Tab, Tabs } from "@mui/material";
import githubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";
import logo from "../assets/wu_logo.png";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";

const Navbar = () => {
  const useRouteMatch = (patterns: readonly string[]) => {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  };

  const routeMatch = useRouteMatch(["/projects", "/contact", "/"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Box component="header" sx={{ display: "flex", height: "auto", p: 2 }}>
      <img src={logo} height="40" alt="logo" />

      <Tabs sx={{ ml: 2 }} value={currentTab}>
        <Tab label="Home" value="/" to="/" component={RouterLink} />
        <Tab
          label="Projects"
          value="/projects"
          to="/projects"
          component={RouterLink}
        />
        <Tab
          label="Contact"
          value="/contact"
          to="/contact"
          component={RouterLink}
        />
      </Tabs>

      <Stack
        direction="row"
        sx={{ ml: "auto", verticalAlign: "middle" }}
        spacing={2}
      >
        <Link
          aria-label="Link to Josh's LinkedIn profile"
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/wujoshua"
        >
          <img height="40" src={linkedInLogo} alt="LinkedIn company logo" />
        </Link>

        <Link
          aria-label="Link to Josh's github page"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/jwu910"
        >
          <img height="40" src={githubLogo} alt="LinkedIn company logo" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Navbar;
