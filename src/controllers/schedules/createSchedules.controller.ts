import {Request, Response  } from "express";
import { AppError, handleError } from "../../Errors/appError";
import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {

    try {
        const {date, hour, propertyId} = req.body
        const userId: string = req.user.id

        const newSchedules = await createSchedulesService({date, hour, propertyId, userId})

        return res.status(201).json({message: newSchedules}) 
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export default createSchedulesController;