import {Request, Response  } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../Errors/appError";

const updateUserController = async (req: Request, res: Response) => {
    
    try {
        const user: IUserUpdate = req.body
        const id: string = req.params.id 

        const userUpdate = await updateUserService(user, id)

        return res.status(200).json(instanceToPlain(userUpdate))
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export default updateUserController;