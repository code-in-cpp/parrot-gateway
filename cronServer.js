///////////////////////////////////////////////////////////
const schedule = require('node-schedule');
const model = require('./models/model');
model.init();

const  scheduleCronstyle = ()=>{  
    schedule.scheduleJob('30 * * * * *',()=>{
        console.log('schedule 30s Cronstyle:' + new Date());
    }); 

    schedule.scheduleJob('10 * * * * *',()=>{
        console.log('schedule 10s Cronstyle:' + new Date());
    }); 
}

scheduleCronstyle();