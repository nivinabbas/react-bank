import { Component } from 'react';
import { Progress } from 'antd';

class Category extends Component {
  getSumOfCategory = () => {
    let sumofCategory = {};
    let transactions = this.props.data;
    transactions.map((data) => {
      sumofCategory[data.category]
        ? (sumofCategory[data.category] += data.amount)
        : (sumofCategory[data.category] = data.amount);
        return data;
    });
    return sumofCategory;
  };
getTotalSum=()=>{
  let sumofCategory = this.getSumOfCategory();
  return Object.values(sumofCategory).reduce((prev,current)=> prev+current,0)
  
}
  render() {
    let sumofCategory = this.getSumOfCategory();

    return (
      
      <div className='categoryItems'>
           
   
   
        {Object.keys(sumofCategory).map((category,index) => (
          <div className='categoryItem' key={index}>
             <Progress type="circle" status={sumofCategory[category]<0?"exception":"success"} percent={Math.abs(sumofCategory[category])/this.getTotalSum()*100} format={percent => `${sumofCategory[category]}`} />
          <p >
            {category} 
          </p>
          </div>
        ))}
      </div>
    );
  }
}
export default Category;
