import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { hash } from "bcrypt";
import { AppError } from "../../Errors/appError";

const updateUserService = async (userBody:IUserUpdate, id: string) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id
    })
    if(!user){
        throw new AppError(404, "User not found")
    }
    await userRepository.update(
        id,
        {
            name: userBody.name ? userBody.name : user.name,
            email: userBody.email ? userBody.email : user.email,
            password: userBody.password ? await hash(userBody.password, 10) : user.password,
            updatedAt: new Date()
        }
    )

    const userUpdate = await userRepository.findOneBy({
        id
    })
    return userUpdate
}

export default updateUserService