import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../Errors/appError";

const listCategoriesPropertiesService = async (id: string) => {
    
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const categoriesRepository = AppDataSource.getRepository(Categories)

    const category = await categoriesRepository.findOneBy({
        id: id
    })

    if (!category){
        throw new AppError(404, "Invalid id")
    }

    const property = await propertiesRepository.find()

    const properties = property.filter(elem => elem.category.id === category.id)

    const {name} = category

    return {id, name, properties}
}

export default listCategoriesPropertiesService;