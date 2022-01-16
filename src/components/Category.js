import { Component } from 'react';

class Category extends Component {
  getSumOfCategory = () => {
    let sumofCategory = {};
    let transactions = this.props.data;
    transactions.map((data) => {
      sumofCategory[data.category]
        ? (sumofCategory[data.category] += data.amount)
        : (sumofCategory[data.category] = data.amount);
    });
    return sumofCategory;
  };

  render() {
    let sumofCategory = this.getSumOfCategory();
   console.log(sumofCategory);
    return (
      <div>
        {Object.keys(sumofCategory).map((category) => (
          <p >
            {category} : {sumofCategory[category]}
          </p>
        ))}
      </div>
    );
  }
}
export default Category;
