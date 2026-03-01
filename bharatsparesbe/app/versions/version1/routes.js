import { Router } from "express";
import { health } from "./controller/health.js";
import { search } from "./controller/search.js";

const routes = Router()
routes.get("/health", health)
routes.get("/search", search)

export default routes