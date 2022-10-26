
import AppDataSource from "../../data-source"
import { AppError } from "../../Errors/appError";
import { Addresses } from "../../entities/addresses.entity";
import { IAddressRequest} from "../../interfaces/properties";

const createAddressesService = async (address: IAddressRequest) => {
    
    const addressesRepository = AppDataSource.getRepository(Addresses)

    const addresses = await addressesRepository.findOneBy({
        district: address.district
    })

    if(addresses){
        throw new AppError(400, "Address Already Exists")
    }

    if(address.state.length > 2){
        throw new AppError(400, "Invalid state, 2 digits only")
    }

    if(address.zipCode.length > 8){
        throw new AppError(400, "Invalid zipcode, 8 digits only")
    }

    const createAddress = new Addresses()
    createAddress.district = address.district
    createAddress.zipCode = address.zipCode
    createAddress.number = address.number
    createAddress.city = address.city
    createAddress.state = address.state
    createAddress.id
 
    addressesRepository.create(createAddress)
    await addressesRepository.save(createAddress)

    return createAddress
}

export default createAddressesService;