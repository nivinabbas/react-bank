import { Component } from 'react';
// import './styles.css';
import { Card ,Row,Col} from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

const { Meta } = Card;

class Transaction extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteTransaction = (key) => {
  
    this.props.deleteTransaction(this.props.data._id);
  };

  render() {
    return (
      <Row className="transaction" gutter={[16,16]}>
        {this.props.data.map((t,index) => (
          <Col span={6}  key={index}>
          <Card
            key={t._id}
            style={{ width: 300 }}
            actions={[
              <DeleteTwoTone
                key="delete"
                twoToneColor="red"
                onClick={() => this.props.deleteTransaction(t._id)}
              />,
            ]}
          >
            <Meta title="Amount" description={t.amount} />
            <Meta title="Vendor" description={t.vendor} />
            <Meta title="Category" description={t.category} />
          </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Transaction;
