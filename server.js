require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const globalErrorHandler = require('./_middlewares/error-handler');
// const projectRoutes = require('./api/projects/project.controller');
// const userRoutes = require('./api/users/user.controller');
// const issueRoutes = require('./api/issues/issue.controller');
require('./_db/db');

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];
const PORT = stage.port;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// api routes
// app.use('/projects', projectRoutes);
// app.use('/users', userRoutes);
// app.use('/issues', issueRoutes);

// global error handler
app.use(globalErrorHandler);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
