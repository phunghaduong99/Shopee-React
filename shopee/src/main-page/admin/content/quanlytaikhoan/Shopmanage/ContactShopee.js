import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

class ContactShopee extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      ShopID: null,
      nameShop: null,
      shop_link: window.location.href,
      shop_id: null
    });

  }
  componentDidMount() {
    let index = this.state.shop_link.search("shop_id=");
    let shop_id;
    if (index > 0) {
      shop_id = this.state.shop_link.slice(index + 8, index + 15);
    }
    if (shop_id !== null) {
      this.setState({ shop_id: shop_id });
    }
    console.log("shop_id la: " + shop_id);


  }
  onSubmit = (event) => {
    event.preventDefault();
    // let token = JSON.parse(localStorage.getItem('token'));
    axios({
      method: 'post',
      url: 'http://192.168.1.144:8081/shop',
      data: {
        id: '99999',
        name: 'sssfff'
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization':  `${this.props.token}`
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Lỗi.")
      });
  }




  onChange = (event) => {
    
    var name = event.target.value;
   
    this.setState({
      nameShop : name
    });
  


}
  render() {


    return (
      <div  >
        <div className=" card overview col-sm-12">
          <h2>Kết nối cửa hàng</h2>
        </div>
        <div className="col-md-8 offset-md-2 mr-auto ml-auto ">
          <h5> Kết nối thành công. Vui lòng nhập đầy đủ các thông tin dưới đây</h5>
        </div><br />
        <div className="col-md-8 offset-md-3 mr-auto ml-auto ">
          <form className="login100-form validate-form"  onSubmit={this.onSubmit}>
            {/* <div className=" row form-group ">
              <div className="col-md-4 aline">
                <label className="col-form-label"><h6 >Shop ID</h6> </label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  name="ShopID"
                  placeholder="Nhập Shop ID"
                  type="text"
                  onChange={this.onChange}
                  required
                />
                <span className=" txt6">
                  Shop ID là giá trị xuất hiện trên URL của tranng Web hiện tại<br />
                  Ví dụ: <br />
                  http://google.com/?shop_id=12345 <br />
                  shop_id sẽ là 12345, bạn nhập vào 12345
                                    </span>
              </div>
            </div> */}
            <div className=" row form-group ">
              <div className="col-md-4 aline">
                <label className="col-form-label"><h6>Tên của hàng của bạn</h6> </label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  name="nameShop"
                  placeholder="Nhập tên của hàng của bạn"
                  type="text"
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-3 offset-md-9 col-sm-6 ml-auto">
              <button type="submit" className="btn btn-primary ">   Xong   </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  console.log(state);
  return {
    token: state.token
  }
}
export default connect(mapStatetoProps, null)(ContactShopee);
