
import { Component } from 'react/cjs/react.production.min';

class Transaction extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  
  render(){
    return (
        <div className='transaction'>
            {(this.props.data).map(t => 
                <div>
                <span>{t.amount} </span>
                <span>{t.vendor} </span>
                <span>{t.category} </span>
                </div>

            )}
        </div>
    )
  }
  
}

export default Transaction;
