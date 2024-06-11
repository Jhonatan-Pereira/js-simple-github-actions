var { format } = require('date-fns');

const date = format(new Date(), 'yyyy-MM-dd');
console.log(`Hello World! Today is ${date}`);