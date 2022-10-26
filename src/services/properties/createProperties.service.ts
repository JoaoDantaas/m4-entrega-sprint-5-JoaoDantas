
import AppDataSource from "../../data-source"
import { IPropertyRequest } from "../../interfaces/properties";
import { Properties } from "../../entities/properties.entity";
import createAddressesService from "../addresses/createAddresses.service";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../Errors/appError";

const createPropertiesService = async ( {value, size, address, categoryId}: IPropertyRequest, ) => {

    const propertiesRepository =  AppDataSource.getRepository(Properties)
    const categoriesRepository = AppDataSource.getRepository(Categories)

    const category = await categoriesRepository.findOneBy({
        id: categoryId
    })

    if(category === null){
        throw new AppError(404, "Id not found")
    }
    
    const property = new Properties()
    property.value = value
    property.size = size
    property.category = category
    property.address = await createAddressesService(address)
    property.id
    property.sold
    property.createdAt = new Date()
    property.updatedAt = new Date()
    

    propertiesRepository.create(property)
    await propertiesRepository.save(property)

    return property
}

export default createPropertiesService;