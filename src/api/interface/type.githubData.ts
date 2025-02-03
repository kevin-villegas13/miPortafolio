import { Repository } from "./type.repository";

export interface GitHubData {
  repos: Repository[];
  orgCount: number;
}
