import {Request, Response  } from "express";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../Errors/appError";

const createUserController = async (req: Request, res: Response) => {
    try {
        const {name, email, password, isAdm} = req.body

        const newUser = await createUserService({name, email, password, isAdm})

        return res.status(201).json(instanceToPlain(newUser))
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export default createUserController;