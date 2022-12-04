import { config as loadIntoMemory } from "dotenv";

class Environment {
  public readonly cmsPassword: string;
  public readonly port: number;

  constructor() {
    loadIntoMemory();

    this.cmsPassword = process.env.CMS_PASSWORD ?? "";
    this.port = Number(process.env.PORT);
  }
}

export default Environment;
