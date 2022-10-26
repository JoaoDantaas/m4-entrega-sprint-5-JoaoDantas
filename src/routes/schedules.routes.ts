import { Router } from "express";

import authToken from "../middlewares/authToken.middlewares";
import isAdmMiddleware from "../middlewares/isAdm.middlewares";

import createSchedulesController from "../controllers/schedules/createSchedules.controller"
import listSchedulesPropertiesController from "../controllers/schedules/listSchedulesProperties.controller";


const router = Router()

router.post("/schedules", authToken, createSchedulesController)
router.get("/schedules/properties/:id", authToken, isAdmMiddleware,listSchedulesPropertiesController)

export default router