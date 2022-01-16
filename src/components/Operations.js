import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, InputNumber } from 'antd';
import {
  PieChartOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import './styles.css';

class Operations extends Component {
  formRef = React.createRef();
  constructor() {
    super();
    this.state = {
      amount: 0,
      vendor: '',
      category: '',
      redirect: false,
    };
  }
  handleInputChange = (value, name) => {
   
    this.setState({
      [name]: value,
    });
  };

  depositAmount = async () => {
    this.postAndClear();
  };
  drawAmount = () => {
    this.setState(
      {
        amount: this.state.amount * -1,
      },
      this.postAndClear
    );
  };

  postAndClear = async () => {
    if (this.state.amount !== 0) {
      const save = this.state;

      await axios.post('http://localhost:5500/transaction', save);

      this.setState({
        amount: 0,
        vendor: '',
        category: '',
      });
      this.formRef.current.setFieldsValue({
        amount: 0,
        vendor: '',
        category: '',
      });
      this.props.depositAmount();


    }
  };

  render() {
    return (
      <div>
        <div className="center">
          <Form ref={this.formRef} name="deposit-form" className="login-form">
            <Form.Item
              name="amount"
              rules={[
                {
                  required: true,
                  message: 'Please input your amount!',
                },
              ]}
            >
              <InputNumber
                prefix={<DollarOutlined className="site-form-item-icon" />}
                placeholder="Amount"
                style={{ width: '100%' }}
                value={this.state.amount}
                onChange={(value) => this.handleInputChange(value, 'amount')}
              />
            </Form.Item>
            <Form.Item
              name="vendor"
              rules={[
                {
                  required: true,
                  message: 'Please input your vendor!',
                },
              ]}
            >
              <Input
                prefix={
                  <ShoppingCartOutlined className="site-form-item-icon" />
                }
                placeholder="Vendor"
                value={this.state.vendor}
                onChange={(event) =>
                  this.handleInputChange(event.target.value, 'vendor')
                }
              />
            </Form.Item>
            <Form.Item
              name="category"
              rules={[
                {
                  required: true,
                  message: 'Please input your category!',
                },
              ]}
            >
              <Input
                prefix={<PieChartOutlined className="site-form-item-icon" />}
                placeholder="Category"
                value={this.state.category}
                onChange={(event) =>
                  this.handleInputChange(event.target.value, 'category')
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="deposit-form-button"
                style={{
                  width: '100%',
                  backgroundColor: '#4bb543',
                  borderColor: '#4bb543',
                }}
                onClick={this.depositAmount}
              >
                Deposit
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="deposit-form-button"
                style={{ width: '100%' }}
                danger
                onClick={this.drawAmount}
              >
                Withdraw
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Operations;
