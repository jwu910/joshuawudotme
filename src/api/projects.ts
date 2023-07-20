export const fetchRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/users/jwu910/repos?affiliation=owner&fork=false",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    },
  );

  const data = (await response.json()) as Record<string, unknown>[];

  const filteredRepos = data.filter(
    (repository) =>
      !repository.fork && repository.has_pages && repository.homepage,
  );

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
