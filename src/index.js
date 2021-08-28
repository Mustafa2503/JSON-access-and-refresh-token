import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import apiRouter from "./routes";
import errorHandler from "./lib/globalErrorHandler";
import GlobalError from "./lib/globalError";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser()); // cookie parser middleware for cookie object
app.use(apiRouter);

app.all("*", async (req, res, next) => { // *
    const err = new GlobalError( //**
        `${req.originalUrl} does not exist on the server`,
        404
    );
    
    next(err); // ***
});

app.use(errorHandler); // ****
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`server listen at port ${PORT}`);
});