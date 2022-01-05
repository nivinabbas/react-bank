import { Component } from 'react/cjs/react.production.min';

class Transaction extends Component {
  constructor() {
    super();
    this.state = {};
  }


deleteTransaction = (key) =>
{
  console.log(this.props.data);
    this.props.deleteTransaction(this.props.data._id)
    
}

  render() {
    return (
      <div className="transaction">
        {this.props.data.map((t) => (
          <div key={t._id}>
            <span>{t.amount} </span>
            <span>{t.vendor} </span>
            <span>{t.category} </span>
            <button onClick={()=>this.props.deleteTransaction(t._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Transaction;
