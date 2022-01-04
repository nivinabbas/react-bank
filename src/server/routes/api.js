const express = require('express');
const Transaction = require('../model/transactionSchema');
const router = express.Router();

router.get('/transactions', function (request, response) {
    Transaction.find({}, function (err, transaction) {
        if (err) console.log(err);
        response.send(transaction);
      });

});

router.post('/transaction', function (request, response) {
    console.log(request.body);
    let addTransaction = new Transaction({
       
        amount: request.body.amount,
        category: request.body.category,
        vendor: request.body.vendor,
 
      });
    
      addTransaction.save().then((Transaction) => {});
      response.send(addTransaction);

    });

router.delete('/transaction', function (request, response) {
    
    let transaction= request.body;

    Transaction.findOneAndDelete({ _id: transaction._id}, function (err, transaction) {});
  
    response.end();
});

module.exports = router;