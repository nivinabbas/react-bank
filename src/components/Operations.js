import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Operations extends Component {
  constructor() {
    super();

    this.state = {
      amount: 0,
      vendor: '',
      category: '',
      redirect: false,
      // totalAmount: this.props.totalAmount,
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  depositAmount = () => {
    this.componentDidMount();
  };
  drawAmount = () => {
    this.setState({
      amount: this.state.amount * -1,
    }, this.componentDidMount);
   
  };

  async componentDidMount() {
    if (this.state.amount !== 0) {
      const save = this.state;


      const resp = await axios.post('http://localhost:5500/transaction', save);
      console.log(resp.data);
      this.setState({
        amount: 0,
        vendor: '',
        category: '',
      });
      this.props.depositAmount();
    }
  }
  // amountDeposit() {
  //   this.props.data.map((t) => {
  //     this.setState({ totalAmount: t.amount+this.state.amount});
  //   });
  // }

  render() {
    return (
      <div>
        <input
          key="1"
          type="number"
          name="amount"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.handleInputChange}
        />
        <input
          key="2"
          type="text"
          name="vendor"
          placeholder="vendor"
          value={this.state.vendor}
          onChange={this.handleInputChange}
        />
        <input
          key="3"
          type="text"
          name="category"
          placeholder="Category"
          value={this.state.category}
          onChange={this.handleInputChange}
        />
        <button onClick={this.depositAmount}>Deposit</button>
        <button onClick={this.drawAmount}>WithDraw</button>
        {this.state.redirect ? <Redirect to="/transactions" /> : null}
      </div>
    );
  }
}

export default Operations;
