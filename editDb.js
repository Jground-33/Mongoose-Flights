require('./config/database')

const F = require('./models/flight');
const T = require('./models/ticket');

// F.find({}, function(e, result){
//     console.log(result);
// });

// T.find({}, function(e, result){
//     console.log(result);
// });


F.deleteMany({}, (err, result) => {
    console.log(result);
});

T.deleteMany({}, (err, result) => {
    console.log(result);
});







// node editDb