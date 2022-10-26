import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/appError";
import createPropertiesService from "../../services/properties/createProperties.service";

const createPropertiesController = async (req: Request, res: Response) => {
    try{
        const { value, size, address, categoryId} = req.body

        const newProperties = await createPropertiesService({value, size, address, categoryId})

        return res.status(201).json(newProperties)
     } catch(error){
        if(error instanceof AppError) {
            handleError(error, res)
        }
     }
}

export default createPropertiesController;