import { useEffect, useState } from "react";
import { fetchAllRepos } from "@/api/githubService";
import { GitHubData } from "@/api/interface/type.githubData";
import { Repository } from "@/api/interface/type.repository";

export function useGitHubData(): GitHubData {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [orgCount, setOrgCount] = useState<number>(0);

  useEffect(() => {
    async function getRepos() {
      const reposData = await fetchAllRepos();
      setRepos(reposData);
      setOrgCount(new Set(reposData.map((repo) => repo.owner?.login)).size);
    }
    getRepos();
  }, []);

  return { repos, orgCount };
}
