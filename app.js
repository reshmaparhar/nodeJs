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
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
   
        openapi: '3.0.0',
        info: {
          title: 'Express API',
          version: '1.0.0',
          description:
            'This is a REST API application made with Express. ',
          license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
          },
          contact: {
            name: 'JSONPlaceholder',
            url: 'https://jsonplaceholder.typicode.com',
          },
        },
        servers: [
          {
            url: 'http://localhost:10000',
            description: 'Development server',
          },
        ],
      
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  components: {
    securitySchemes: {
      jwt: {
        type: "http",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT"
      },
    }
  }
  ,
  security: [{
    jwt: []
  }],
  apis: ['./routers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
//const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// ...


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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