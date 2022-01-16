import { Component } from 'react/cjs/react.production.min';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Category from './components/Category';
import axios from 'axios';
import './App.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      balance: 0,
      activeTab: 'transactions',
    };
  }

  setActiveTab = (activeTab) => {

    this.setState({
      activeTab,
    });
  };
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
    this.setActiveTab('transactions');
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
      <div>
          <div
              className={
                this.state.balance > 500 ? 'totalAmountGreen' : 'totalAmountRed'
              }
            >
              Total Amount : {this.state.balance}
            </div>
        <Tabs
          activeKey={this.state.activeTab}
          onTabClick={(e) => this.setActiveTab(e)}
          centered
        >
           
          <TabPane tab="Transactions" key="transactions">
         
            <Transactions
              data={this.state.data}
              deleteTransaction={this.deleteTransaction}
            />
          </TabPane>
          <TabPane tab="Operations" key="operations">
            <Operations
              data={this.state.data}
              drawAmount={this.drawAmount}
              depositAmount={this.depositAmount}
            />
          </TabPane>
          <TabPane tab="Categories" key="categories">
            <Category data={this.state.data} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default App;
