import { Router } from "express";

import isAdmMiddleware from "../middlewares/isAdm.middlewares";

import createCategoriesController from "../controllers/categories/createCategories.controller";
import authToken from "../middlewares/authToken.middlewares";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoriesPropertiesController from "../controllers/categories/listCategoriesProperties.controller";


const router = Router()

router.post("/categories",  authToken, isAdmMiddleware, createCategoriesController)
router.get("/categories", listCategoriesController)
router.get("/categories/:id/properties", listCategoriesPropertiesController)

export default router