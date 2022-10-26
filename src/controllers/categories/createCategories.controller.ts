import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appError";
import createCategoriesService from "../../services/categories/createCategories.service";

const createCategoriesController = async (req: Request, res: Response) => {
    try{
        const {name} = req.body
  

        const newCategory = await createCategoriesService({name})

        return res.status(201).json(newCategory)
     } catch(error){
        if(error instanceof AppError) {
            handleError(error, res)
        }
     }
}

export default createCategoriesController;