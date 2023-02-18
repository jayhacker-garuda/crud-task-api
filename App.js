const express = require('express');
const app = express();
const mongoose = require('./DB/Server/mongoose')
const TaskList = require('./DB/Models/TaskList');
const Task = require('./DB/Models/Task');





/**
 * CORS - Cross Origin Request Security
 * Backend - http://127.0.0.1:3000
 * Frontend - http://127.0.0.1:4200
 */
app.use((req, res, next) => {
    // Allowed to connect
    // res.setHeader('Access-Control-Origin', 'http://127.0.0.1:4200');
    res.setHeader('Access-Control-Origin', '*');
    // Allowed methods
    res.setHeader('Access-control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Allowed Headers
    res.setHeader('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With, Content-Type, Accept');
    // Set True to include cookies in the requests sent to API(e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // To next layer of middleware
    next();
});

app.use(express.json());


app.get(
    '/task-lists',
    (req, res) => {
        TaskList.find({})
            .then(tasksList => res.status(200).send(tasksList))
            .catch(err => console.log('errors', err))
    }
);
app.post(
    '/task-lists',
    (req, res) => {
    // console.log("Hello i am about to create a task list 🤘🏿💀🤘🏿")
    console.log(req.body);
    let tasklistObj = { 'title': req.body.title };
    TaskList.create(tasklistObj)
        .then(tasksList => res.status(201).send(tasksList))
        .catch(err => {
            console.log('errors', err)
            res.status(500)
        })
    }
);

app.get(
    '/task-lists/:id',
    (req, res) => {
        const { id } = req.params
        TaskList.find({ _id: id })
            .then(tasksList => res.status(200).send(tasksList))
            .catch(err => {
                console.log('errors', err)
                res.status(500)
        })
    }
);

app.put(
    '/task-lists/:id',
    (req, res) => {
        const { id } = req.params

        TaskList.findOneAndUpdate({ _id: id }, { $set: req.body })
            .then(tasksList => res.status(200).send(tasksList))
            .catch(err => {
                console.log('errors', err)
                res.status(500)
            })
        
        // TaskList.
    }
);
app.patch(
    '/task-lists/:id',
    (req, res) => {
        const { id } = req.params

        TaskList.findOneAndUpdate({ _id: id }, { $set: req.body })
            .then(tasksList => res.status(200).send(tasksList))
            .catch(err => {
                console.log('errors', err)
                res.status(500)
            })
        
        // TaskList.
    }
);

app.delete(
    '/task-lists/:id',
    (req, res) => {
        const { id } = req.params

        TaskList.findByIdAndDelete(id)
            .then(tasksList => res.status(204))
            .catch(err => {
                console.log('errors', err)
                res.status(500)
            })
    }
);

// const api = require('./Routes/api')

app.listen(3000, () => {
    console.log(`Server started 🚀🚀🚀 on Port 3000`);
})
