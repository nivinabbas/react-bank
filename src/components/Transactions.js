
import { Component } from 'react/cjs/react.production.min';
import Transaction from './Transaction'

class Transactions extends Component {

  render(){
    
    return (
        <Transaction key={this.props.data}  data={this.props.data} deleteTransaction={this.props.deleteTransaction}/>
    )
  }
  
}

export default Transactions;
