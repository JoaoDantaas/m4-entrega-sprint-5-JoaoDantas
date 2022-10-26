import {Request, Response  } from "express";
import { AppError, handleError } from "../../Errors/appError";
import listPropertiesService from "../../services/properties/listProperties.service";


const listPropertiesController = async (req: Request, res: Response) => {
    try {
        const properties = await listPropertiesService();

        return res.status(200).json(properties);
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res);
        }
    }
}

export default listPropertiesController;