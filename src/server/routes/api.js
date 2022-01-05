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
  let addTransaction = new Transaction({
    amount: request.body.amount,
    category: request.body.category,
    vendor: request.body.vendor,
  });

  addTransaction.save().then((Transaction) => {});
  response.send(addTransaction);
});

router.delete('/transaction', async function (request, response) {
  const {id} = request.body;
  console.log(id);
 await  Transaction.findOneAndDelete({_id:id});

  response.end();
});

module.exports = router;
