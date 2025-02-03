import { fetchOrgRepos, fetchUserOrganizations } from "./github.orgs";
import { fetchUserRepos } from "./github.proyects";

export async function fetchAllRepos() {
  try {
    const userRepos = await fetchUserRepos();
    const activeOrgs = await fetchUserOrganizations();

    const orgReposPromises = activeOrgs.map(fetchOrgRepos);
    const orgReposArray = await Promise.all(orgReposPromises);
    const orgRepos = orgReposArray.flat();

    return [...userRepos, ...orgRepos];
  } catch (error) {
    console.error("Error obteniendo todos los repositorios:", error);
    return [];
  }
}
