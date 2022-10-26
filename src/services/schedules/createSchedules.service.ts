import AppDataSource from "../../data-source"
import { AppError } from "../../Errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity";
import { Properties } from "../../entities/properties.entity";
import { User } from "../../entities/user.entity";

const createSchedulesService = async ({date, hour, propertyId, userId }: IScheduleRequest) => {
    const schedulesRepository = AppDataSource.getRepository(Schedules_users_properties);
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const userRepository = AppDataSource.getRepository(User)

    const schedules = await schedulesRepository.find();
    const properties = await propertiesRepository.findOneBy({
        id: propertyId
    })
    const user = await userRepository.findOneBy({
        id: userId
    })

    if(properties === null || user === null){
        throw new AppError(404, "Id invalido")
    }

    if(hour < "08:00" || hour > "18:00"){
        throw new AppError(400, "Invalid hour")
    }

    const dateExists = schedules.find(shedule => shedule.date ===  date && shedule.hour === hour);

    if(dateExists) {
        throw new AppError(400, "Schedule already exists");
    }

    const newDate = new Date(date)

    const newDateFormated = newDate.getDay()

    if(newDateFormated === 6 || newDateFormated === 0){
        throw new AppError(400, "Dia util");
    }


    const newSchedules = new Schedules_users_properties();
    newSchedules.date = date;
    newSchedules.hour = hour;
    newSchedules.properties = properties
    newSchedules.user = user;
    newSchedules.id 

    schedulesRepository.create(newSchedules);
    await schedulesRepository.save(newSchedules);

    return "Created"; 
}

export default createSchedulesService;