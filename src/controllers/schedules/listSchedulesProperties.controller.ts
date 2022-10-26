import {Request, Response  } from "express";
import { AppError, handleError } from "../../Errors/appError";
import listSchedulesPropertiesService from "../../services/schedules/listSchedulesProperties.service";

const listSchedulesPropertiesController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id 

        const schedulesProperties = await listSchedulesPropertiesService(id)

        return res.status(200).json({schedules: schedulesProperties})
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export default listSchedulesPropertiesController;