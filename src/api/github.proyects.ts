import axios from "axios";
import { Repository } from "./interface/type.repository";
const username = import.meta.env.VITE_GITHUB_USERNAME;
const token = import.meta.env.VITE_GITHUB_TOKEN;

export async function fetchUserRepos(): Promise<Repository[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Error obteniendo repos:", error);
    return [];
  }
}
