import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity";
import { AppError } from "../../Errors/appError";

const listSchedulesPropertiesService = async (id: string) => {
    
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const schedulesRepository = AppDataSource.getRepository(Schedules_users_properties)

    const property = await propertiesRepository.findOneBy({
        id: id
    })

    if (property === null){
        throw new AppError(404, "Invalid id")
    }

    const schedules = await schedulesRepository.findOneBy({
        properties: property
    })

    if(schedules === null){
        throw new AppError(404, "Schedles not found")
    }
    

    return [schedules]
}

export default listSchedulesPropertiesService;