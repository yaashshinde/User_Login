const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
const { format } = require('date-fns');


const logEvents = async(message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);        
    } catch (err) {
        console.error(`An error occured!`);
    }
} 


module.exports =  logEvents ;