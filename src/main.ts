import { yellow } from "colors";
import { json, text } from "body-parser";
import express, { Router } from "express";
import cors from "cors";
import compression from "compression";

import Channel from "./Channel";
import Environment from "./Environment";
import postLoginController from "./controllers/postLoginController";

function main() {
  const app = express();

  app.use(json());
  app.use(text());
  app.use(cors());
  app.use(compression());

  const router = Router();

  const { cmsPassword: adminPassword, port } = new Environment();

  router.post("/login", postLoginController({ adminPassword }));
  app.use(router);

  app.listen(port, () => {
    Channel.log(`Server is listening on port ${yellow(String(port))}`);
  });
}

main();
