const express = require('express');
const morgan = require('morgan');  // ← Add this line
const app = express();

// Import the router (instead of individual functions)
const tourRouter = require('./routes/tourRouter.js');
const userRouter = require('./routes/userRouter.js');  // ← Add this line

app.use(express.json());
app.use(morgan('dev'));  // ← Add this line (BEFORE your routes!)


// Use the router for all /tours routes
app.use('/api/tours', tourRouter);  // ← Changed: added /api
app.use('/api/users', userRouter);  // ← Changed: added /api


const port = 4000;
app.listen(port, () => console.log(`Server on port ${port}`));