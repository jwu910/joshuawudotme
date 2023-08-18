export const fetchRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/users/jwu910/repos?affiliation=owner&fork=false&sort=pushed&visibility=public",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    },
  );

  const data = (await response.json()) as Record<string, unknown>[];

  const filteredRepos = data.filter((repository) => {
    return (
      !repository.fork &&
      !repository.archived &&
      repository.description != null &&
      repository.homepage !== null &&
      repository.homepage !== ""
    );
  });

  const repoData = await Promise.all(
    filteredRepos.map(async (repo) => {
      return {
        ...repo,
        lastRelease: await fetch(
          (repo.releases_url as string).replace("{/id}", ""),
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          },
        )
          .then(async (res) => (await res.json()) as Record<string, unknown>[])
          .then((res) => {
            return {
              published_at: res?.[0]?.published_at as string,
              tag_name: res?.[0]?.tag_name as string,
            };
          }),
      };
    }),
  );

  return repoData;
};
