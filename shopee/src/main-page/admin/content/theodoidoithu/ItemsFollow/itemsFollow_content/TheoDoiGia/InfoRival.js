import React, { Component } from 'react';
import imageshop from './../../../3.jpg';
import ChartPrice from './ChartPrice';
import { connect } from 'react-redux';

class InfoRival extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHistoryMyItem: [],
            listHistoryRivalItem: []
        }

    }
    number_format = ( number, decimals, dec_point, thousands_sep ) => {
        var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point === undefined ? "," : dec_point;
        var t = thousands_sep === undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
        var j = i.length;
        j = ( j) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }

    render() {

        let itemRival = this.props.listRivalsItem.filter((c) => c.itemid === this.props.rival.itemid);
        let ShopRival = this.props.listRivalsShop.filter((c) => c.itemid === this.props.rival.itemid);

        let number_rating = ShopRival[0].rating_good + ShopRival[0].rating_normal + ShopRival[0].rating_bad;
        let rating_count_item = Math.round(itemRival[0].rating_star * 100) / 100;
        let rating_count_Shop = Math.round(ShopRival[0].rating_star * 100) / 100;

        let images = null;
        if (ShopRival[0].images !== null) images = ShopRival[0].images[0];
        else images = imageshop;

        let rivalTable;
        if (this.props.listHistoryRivalItem.length > 0) {
            let length = this.props.listHistoryRivalItem.length;

            if (length <= 7) {
                rivalTable = this.props.listHistoryRivalItem.map((c, index) =>
                    <tr key={index}>
                        <td className="text-center">{c.Date}</td>
                        <td className="text-center">{this.number_format(parseFloat(c.price), 0, '.', ',') }</td>
                    </tr>
                )
            }
            else {
                let newListRival = this.props.listHistoryRivalItem.filter((c, index) => index < 7)
                rivalTable = newListRival.map((c, index) =>
                    <tr key={index}>
                        <td className="text-center">{c.Date}</td>
                        <td className="text-center">{this.number_format(parseFloat(c.price), 0, '.', ',') } </td>
                    </tr>
                )
            }
        }

        return (
            <div className="doi_thu">
                <div className="card-body">
                    <div className="row">
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dulieu-right">
                            <h4>Thông tin đối thủ</h4>
                            <div className="row doithu">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <img className="mx-auto rounded-circle" src={images} alt="" />
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <div className="row ">
                                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                            <h4> {ShopRival[0].name}</h4>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <div className=" txt9"> Địa chỉ:  {ShopRival[0].place}</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 txt9">Đánh giá cửa hàng : <span className="text-danger">{rating_count_Shop}
                                        </span>/5 (<span className="text-danger">{number_rating}</span> đánh giá)</div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="txt9">Đánh giá tốt : <span className="text-danger">{ShopRival[0].rating_good + ShopRival[0].rating_normal}</span></div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="txt9">Đánh giá xấu : <span className="text-danger">{ShopRival[0].rating_bad}</span></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 txt9">Số ngườii theo dõi : <span className="text-danger">{ShopRival[0].follower_count}</span></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <div className="m-l-5 m-b-10"><h4>Thông tin sản phẩm cạnh tranh</h4></div>
                            <div className="row doithu">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <img className="mx-auto rounded-circle" src={itemRival[0].images[0]} alt="" />
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <div className="row ">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <h4> {itemRival[0].name}</h4>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 txt9">Đã bán: <span className="text-danger">{itemRival[0].sold}</span></div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 txt9">Đánh giá sản phẩm: <span className="text-danger">{rating_count_item}</span>/5
                                         (<span className="text-danger">{itemRival[0].rating_count[0]}</span>  đánh giá)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card m-t-30 ">
                        <div className="card-header">
                            <h4>Lịch sử theo dõi giá</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <h6>Bảng thống kê</h6>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr >
                                                <th scope="col " className="text-center">Ngày</th>
                                                <th className="text-center"> Giá sản phẩm (VNĐ)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rivalTable}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                    <h6>Biểu đồ</h6>
                                    <ChartPrice rivalName = {ShopRival[0].name} shopNameSelected = {this.props.shopNameSelected} listHistoryMyItem={this.props.listHistoryMyItem} listHistoryRivalItem={this.props.listHistoryRivalItem} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        token: state.token,
        listRivalsItem: state.listRivalsItem,
        listRivalsShop: state.listRivalsShop,
        followingItemSelected: state.followingItemSelected,
        shopNameSelected: state.shopNameSelected,
       
        listRivalsShopFollowing: state.listRivalsShopFollowing
    }
}
export default connect(mapStatetoProps, null)(InfoRival);