const express = require('express');
const mongoose = require('mongoose');
const HomeModel=require("./HomeModel");
const app = express();
const cors=require('cors')
app.use(cors())
app.use(express.json());


const MONGODB_URI = `mongodb+srv://sameerulhakofficial:X4y7fLCzKvzXOvUb@cluster0.shhfy9j.mongodb.net/?retryWrites=true&w=majority`;
      mongoose.connect(MONGODB_URI)
          .then(() => {
              console.log("Database connected successfully");
            //   res.status(200).send("Database connected successfully");
          })
          .catch((err) => {
              console.error("Error connecting to database:", err);
            //   res.status(500).send("Error connecting to database");
          });


app.post("/home/create",(req, res) => {
    const {
      department,
      projectName,
      projectEngineer,
      location,
      estimatedTime,
      estimatedBudget,
      completionStatus,
    } = req.body;
    console.log({
      department,
      projectName,
      projectEngineer,
      location,
      estimatedTime,
      estimatedBudget,
      completionStatus,
    });
    const newProject = new HomeModel({
      department: department,
      projectName: projectName,
      projectEngineer: projectEngineer,
      location: location ,
      estimatedTime: estimatedTime ,
      estimatedBudget: estimatedBudget ,
      completionStatus: completionStatus,
    });
  
    newProject.save()
      .then((result) => {
        res.status(201).json({
          message: 'Project created successfully',
          project: result,
        });
        console.log(`created ${result}`);
      })
      .catch((error) => {
        res.status(500).json({
          error: error.message,
        });
    }
      )
});
  
  app.get("/home/all",(req, res) => {
      HomeModel.find()
        .then((projects) => {
          res.status(200).json({
            message: 'Projects fetched successfully',
            projects: projects,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error.message,
          });
        }
        )
  });
app.listen(8001, () => {
    console.log(`Server is running on http://localhost:${8001}`);
});



