const app = require('express')();
// const bodyParser = require('body-parser');
const logger = require('morgan');
const mysql = require('mysql');
// const UssdMenu = require('ussd-menu-builder');
const port = process.env.PORT || 3000;
const db = require('./models');
const Sequelize = require('sequelize')

//create a connection to the database

var connection = new Sequelize({
    host : 'localhost',
    user : 'root',
    password : 'letmein',
    database :  'revenue_collection',
    dialect: 'mysql',
    insecureAuth: true
});

connection.sync({
    logging:console.log
}).then(function(){

})

// hubtel Api Key
//4e7e96a047c953c8a0584285ca7d0fdaac187089f276a79aa6486cc08dba5f2d

// var test = Sequelize.authenticate().then(() => {
    // console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
    // console.error('Unable to connect to the database:', err);
//   });

// console.log test;

app.use(logger('dev'));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: true}));

app.get('*', function(req, res){
    res.send('this a ussd application for revenue collectors')
})
//require an agent_handler and a customer_handler
//the parameters that we will be getting from the request made by user from hubtel

app.post('*', function (req,res){
    var phoneNumber = req.body.phoneNumber;
    var sessionId = req.body.sessionId;
//     let Channel = req.body.Channel;
//     let customerName = req.body.CustomerName;
//     let token = req.body.Token;
    var serviceCode = req.body.serviceCode;
    var text = req.body.text


    console.log(phoneNumber,sessionId,serviceCode)


   
//check if the user is a revenue collector or customer

if (text === ''){
    message = `CON Welcome to Jumeni Pay \n`;
    message += '1: Collect Payment \n';
    message += '1: Register New Customer \n';
    message += '1: Report an Issue \n';
}

//collect payment

else if (text === '1') {
    message += 'CON Enter Customer Code \n';
}

else if (length === 2 && text[0] === '1'){
    message += 'CON Enter Amount Collected';
}

else if (length === 3 && txt[0] === '1') {
    message += 'CON Confirm collection of Payment \n';
    message += '1)YeS / 2) No';
}   

else if (length === 4 && text[3] === '1' && text[0] === '1') {
    message += 'END Thank you, transaction succesfull\n';
}

else if (length === 4 && text[3] === '2' && text[0] === '1') {
    message += 'END Transaction has been cancelled\n';


//send message to client
//revenue collector name
//payment amount
//save transaction id
//time and date of transaction

        db.Transactions.create({
            phoneNumber: "",
            customerCode: options[1],
            amountCollected: options[2],
            time_of_transaction: "",
            transaction_status: options[3]
        }).then(function(transaction) {
            console.log('transaction was copmleted',transaction );
        });
}

});

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
});

