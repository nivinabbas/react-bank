import { Component } from 'react/cjs/react.production.min';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      balance: 0,
    };
  }

  getBalance = () => {
    let newBalance = 0;
    for (let d of this.state.data) {
      newBalance += d.amount;
    }
    this.setState({
      balance: newBalance,
    });
  };

  async componentDidMount() {
    await this.getTransactions();
    this.getBalance();
  }
  async getTransactions() {
    const response = await axios.get('http://localhost:5500/transactions');

    this.setState({ data: response.data });
    this.getBalance();
  }

  drawAmount = () => {
    this.getTransactions();
  };
  depositAmount = () => {
    this.getTransactions();
  };

  deleteTransaction = async (id) => {
    await axios.delete('http://localhost:5500/transaction', {
      data: { id },
    });

    this.getTransactions();
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Link to="/"> Transaction </Link>
            <Link to="/operations"> Operations </Link>
            <div>{this.state.balance}</div>

            <Route
              exact
              path="/"
              render={() => (
                <Transactions
                  data={this.state.data}
                  deleteTransaction={this.deleteTransaction}
                />
              )}
            />
            <Route
              exact
              path="/operations"
              render={() => (
                <Operations
                  data={this.state.data}
                  drawAmount={this.drawAmount}
                  depositAmount={this.depositAmount}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
