
import { Component } from 'react/cjs/react.production.min';
import Transaction from './Transaction'

class Transactions extends Component {
  constructor() {
    super()

    this.state = {
      
    }
  }
  
  render(){
    return (
        <Transaction key={this.props.data} data={this.props.data}/>
    )
  }
  
}

export default Transactions;
