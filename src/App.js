import { Component } from 'react/cjs/react.production.min';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
       
      ],
      totalAmount: 0,
    };
  }

  async componentDidMount() {
    // (this.state.data).map(t => {
    //   this.setState({totalAmount: this.state.totalAmount+=t.amount})
    // })

    await this.getTransactions();
  }
  async getTransactions() {
    const response = await axios.get('http://localhost:5500/transactions');
    this.setState({ data: response.data });
  }

  drawAmount = () => {
    this.getTransactions();
  };
  depositAmount = () => {
    this.getTransactions();
  };

  deleteTransaction = async (transaction) => {
    await axios.delete('http://localhost:5500/transaction',transaction);
    console.log(transaction);
    this.getTransactions();
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Link to="/"> Transaction </Link>
            <Link to="/operations"> Operations </Link>
            <div>{this.state.totalAmount}</div>

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
