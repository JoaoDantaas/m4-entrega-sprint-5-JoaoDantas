
import { Router } from "express";

import isAdmMiddleware from "../middlewares/isAdm.middlewares";
import authToken from "../middlewares/authToken.middlewares";

import createPropertiesController from "../controllers/properties/createProperties.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";


const router = Router()

router.post("/properties", authToken, isAdmMiddleware,createPropertiesController)
router.get("/properties", listPropertiesController)

export default router