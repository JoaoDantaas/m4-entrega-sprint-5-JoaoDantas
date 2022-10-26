import { ICategoryRequest } from "../../interfaces/categories";
import AppDataSource from "../../data-source"
import { AppError } from "../../Errors/appError";
import { Categories } from "../../entities/categories.entity";

const createCategoriesService = async ({name}: ICategoryRequest) => {
    const categoriesRepository = AppDataSource.getRepository(Categories)
    const categories = await categoriesRepository.find()

    const categoryExists = categories.find(category => 
        category.name ===  name )
    

    if(categoryExists) {
        throw new AppError(400, "Category Already Exists")
    }

    const category = new Categories()
    category.name = name
    category.id

    categoriesRepository.create(category)
    await categoriesRepository.save(category)

    return category
}

export default createCategoriesService;