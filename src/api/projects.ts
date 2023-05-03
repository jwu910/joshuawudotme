export const fetchRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/users/jwu910/repos?affiliation=owner&fork=false",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  return data;
};
