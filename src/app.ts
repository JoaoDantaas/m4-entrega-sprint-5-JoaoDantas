import "reflect-metadata"
import "express-async-errors"
import express, { Request, Response, NextFunction} from "express"
import userRoutes from "./routes/users.routes"
import categoriesRoutes from "./routes/categories.routes"
import schedulesRoutes from "./routes/schedules.routes"
import propertiesRoutes from "./routes/properties.routes"
import { AppError } from "./Errors/appError"

const app = express()
app.use(express.json())

app.use(userRoutes)
app.use(categoriesRoutes)
app.use(propertiesRoutes)
app.use(schedulesRoutes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  });


export default app