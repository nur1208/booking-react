import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";

dotenv.config();

const main = async () => {
  // MongoDB
  try {
    await mongoose
      // eslint-disable-next-line no-undef
      .connect(process.env.MONGODB_URL);

    console.log("Connected to DB");

    const app = express();
    const port = 4050;

    // TODO connect to that database then start the server.
    if (process.env.NODE_ENV.trim() === "development")
      app.use(morgan("dev"));
    app.use(express.json()); // support json encoded bodies
    app.use(cookieParser());
    // app.use(express.urlencoded({ extended: true })); // support encoded bodies
    // app.use(express.cookieParser());
    // app.use(cookieParser());
    // Setting up middleware
    // app.use(cors("http://localhost:3000"));
    // app.use(express.static("public"));
    // app.use(initialize());

    app.get("/", (req, res) => {
      res.send("working");
    });

    // app.get("/api/v1/news", (req, res) => {
    //   res.send("working");
    // });

    // Routing
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/users", usersRoute);
    app.use((err, req, res, next) => {
      const errorStatus = err.status || 500;
      const errorMessage =
        err.message || "Something went wrong!";
      return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
      });
    });
    // app.use(globalErrorHandler);
    app.listen(port, () => {
      console.log(
        `express app listening at http://localhost:${port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

main();
