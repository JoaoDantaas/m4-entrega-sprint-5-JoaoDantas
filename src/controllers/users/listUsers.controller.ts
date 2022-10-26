import {Request, Response  } from "express";
import listUsersService from "../../services/users/listUsers.service";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../Errors/appError";

const listUsersController = async (req: Request, res: Response) => {
    try {
        const users = await listUsersService()

        return res.status(200).json(instanceToPlain(users))
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export default listUsersController;