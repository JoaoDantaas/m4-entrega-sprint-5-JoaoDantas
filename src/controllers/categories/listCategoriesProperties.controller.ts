import {Request, Response  } from "express";
import { AppError, handleError } from "../../Errors/appError";
import listCategoriesPropertiesService from "../../services/categories/listCategoriesProperties.service";

const listCategoriesPropertiesController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id 

        const categoriesProperties = await listCategoriesPropertiesService(id)

        return res.status(200).json(categoriesProperties)
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export default listCategoriesPropertiesController;