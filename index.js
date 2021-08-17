'use strict';

const server=require('./src/server');

require('dotenv').config();
server.start(process.env.PORT || 5000);

const {db}=require('./src/models/index');

db.sync()
.then(()=>{
    server.start(5000)
}).catch(console.error)