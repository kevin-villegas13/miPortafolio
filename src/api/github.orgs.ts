import axios from "axios";
import { Organization } from "./interface/type.organization";
import { Repository } from "./interface/type.repository";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const token = import.meta.env.VITE_GITHUB_TOKEN;
const headers = { Authorization: `Bearer ${token}` };

export async function fetchUserOrganizations(): Promise<string[]> {
  try {
    const organizations = await fetchOrganizations();

    const orgsWithRepos = await Promise.all(
      organizations.map(async (org) => {
        const repos = await fetchOrgRepos(org);
        return repos.some(
          (repo) => repo.owner?.login === username || repo.permissions?.push
        )
          ? org
          : null;
      })
    );

    return orgsWithRepos.filter((org): org is string => org !== null);
  } catch (error) {
    console.error("❌ Error obteniendo organizaciones:", error);
    return [];
  }
}

async function fetchOrganizations(): Promise<string[]> {
  try {
    const response = await axios.get<Organization[]>(
      "https://api.github.com/user/orgs",
      {
        headers,
      }
    );

    return response.data.map((org) => org.login);
  } catch (error) {
    console.error("❌ Error obteniendo organizaciones:", error);
    return [];
  }
}

export async function fetchOrgRepos(org: string): Promise<Repository[]> {
  try {
    const response = await axios.get<Repository[]>(
      `https://api.github.com/orgs/${org}/repos`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(
      `❌ Error obteniendo repos de la organización ${org}:`,
      error
    );
    return [];
  }
}
