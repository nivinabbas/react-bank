const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BankApp', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: Number,
  category: String,
  vendor: String,
});

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;
