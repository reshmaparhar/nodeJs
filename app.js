const express = require('express');
const app = express();
const morgan = require('morgan');
require('./passport');
const passport = require('passport')
const {port} = require('./config/config');
const connectDB = require('./databases/mongo/operation/database')
connectDB();
const user = require('./routers/secure_routes');
const routes = require("./routers/productRoutes");
const userRoutes = require('./routers/userRoutes')
const orderRoutes = require('./routers/orderRoutes')
const login = require('./controller/auth');

app.use(express.json())
app.use(morgan('combined'));
app.use('/auth/login', login);
app.use('/user', passport.authenticate('jwt', {session: false}), user);
app.use('/api', routes);
app.use('/userapi',userRoutes);
app.use('/order',orderRoutes)
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})