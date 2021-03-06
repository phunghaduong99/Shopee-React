import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
class ItemsDetail extends Component {
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
        let itemDetail = [
        ];
        itemDetail[0] = {
            brand: "",
            categories: [
                {
                    id: "",
                    display_name: ''
                },
                {
                    id: "",
                    display_name: ''
                },
                {
                    id: "",
                    display_name: ''
                }
            ],
            discount: "",
            historical_sold: 0,
            images: [],
            itemid: "",
            name: "",
            price: "",
            price_max: "",
            price_min: "",
            rating_count: [],
            rating_star: "",
            shopid: "",
            sold: "",
            stock: "",
        }
        itemDetail = this.props.listItems.filter((c) =>
            c.itemid === this.props.itemIdSelected
        )
        let firstCate = itemDetail[0].categories[0].catid;
        let secondCate = itemDetail[0].categories[1].catid;
        let thirdCate = itemDetail[0].categories[2].catid;
        let fistName, secondName, thirdName;
        if (firstCate < secondCate && firstCate < thirdCate) {
            fistName = itemDetail[0].categories[0].display_name;
            if (secondCate < thirdCate) {
                secondName = itemDetail[0].categories[1].display_name;
                thirdName = itemDetail[0].categories[2].display_name;
            }
            else {
                secondName = itemDetail[0].categories[2].display_name;
                thirdName = itemDetail[0].categories[1].display_name;
            }
        }
        else if (secondCate < thirdCate) {
            fistName = itemDetail[0].categories[1].display_name;
            if (firstCate < thirdCate) {
                secondName = itemDetail[0].categories[0].display_name;
                thirdName = itemDetail[0].categories[2].display_name;
            }
            else {
                secondName = itemDetail[0].categories[2].display_name;
                thirdName = itemDetail[0].categories[0].display_name;
            }
        }
        else if (secondCate > thirdCate) {
            fistName = itemDetail[0].categories[2].display_name;
            if (firstCate < secondCate) {
                secondName = itemDetail[0].categories[0].display_name;
                thirdName = itemDetail[0].categories[1].display_name;
            }
            else {
                secondName = itemDetail[0].categories[1].display_name;
                thirdName = itemDetail[0].categories[0].display_name;
            }
        }
        
        let discount ;
        if(itemDetail[0].discount === null) discount = 0;
        else {
            discount = itemDetail[0].discount 
        }
        return (
            <div>
                <div className="col col-sm-3"><Link to={`/admin/productManagement`} className="txt7"><i className="fa fa-angle-left"></i> Quay lại trang danh sách</Link></div>
                <div className="row ">
                    <div className="col col-sm-7">
                        <h1 className="m-t-15 m-b-25 p-l-15">{itemDetail[0].name}</h1>
                    </div>
                    {/* <div className="col col-sm-5">
                        <h6 className="btn btn-link m-t-15 m-b-25"> Thêm sản phẩm vào danh sách theo dõi</h6>
                    </div> */}
                </div>
                <div className="row ">
                    <div className="col col-sm-7">
                        <div className="card infor">
                            <div className="card-header"><h6>Thông tin chung</h6></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <img className="img-toy-2" src={itemDetail[0].images[0]} alt="" />
                                    </div>

                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label className="form-control-group"><h6>Tên sản phẩm</h6></label>
                                            </div>
                                            <div className="col-md-7 aline">
                                                <label className="form-control-group "><h6>{itemDetail[0].name}</h6></label>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label className="form-control-group"><h6>Mã sản phẩm</h6></label>
                                            </div>
                                            <div className="col-md-7 aline">
                                                <label className="form-control-group "><h6>{itemDetail[0].itemid}</h6></label>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label className="form-control-group"><h6>Cửa hàng</h6></label>
                                            </div>
                                            <div className="col-md-7 aline">
                                                <label className="form-control-group "><h6>{this.props.shopNameSelected}</h6></label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header"><h6>Thông tin chi tiết sản phẩm</h6></div>
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Danh mục</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h6>{fistName}> {secondName}> {thirdName}</h6></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Thương hiệu</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h6>{itemDetail[0].brand}</h6></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Đã bán</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h6>{itemDetail[0].sold}</h6></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Tồn kho</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h6>{itemDetail[0].stock}</h6></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Rating</h6></label>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <div className="row">
                                            <div className="col-sm-7 ">
                                                <h2>{itemDetail[0].rating_star}/5</h2>
                                                <label className="">{itemDetail[0].rating_count[0]} đánh giá</label>
                                            </div>
                                            <div className=" col-sm-5">
                                                <div className="row rating-a ">
                                                    <div className="col-md-9 star">
                                                        <StarRatings
                                                            starRatedColor="#FFD203"
                                                            rating={5}
                                                            starDimension="12px"
                                                            starSpacing="4px"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 count">
                                                        <label className="txt8">{itemDetail[0].rating_count[1]}</label>
                                                    </div>
                                                </div>
                                                <div className="row rating-a ">
                                                    <div className="col-md-9 star ">
                                                        <StarRatings
                                                            starRatedColor="#FFD203"
                                                            rating={4}
                                                            starDimension="12px"
                                                            starSpacing="4px"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 count">
                                                        <label className="txt8">{itemDetail[0].rating_count[2]}</label>
                                                    </div>
                                                </div>
                                                <div className="row rating-a ">
                                                    <div className="col-md-9 star">
                                                        <StarRatings
                                                            starRatedColor="#FFD203"
                                                            rating={3}
                                                            starDimension="12px"
                                                            starSpacing="4px"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 count">
                                                        <label className="txt8">{itemDetail[0].rating_count[3]}</label>
                                                    </div>
                                                </div>
                                                <div className="row rating-a ">
                                                    <div className="col-md-9 star">
                                                        <StarRatings
                                                            starRatedColor="#FFD203"
                                                            rating={2}
                                                            starDimension="12px"
                                                            starSpacing="4px"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 count">
                                                        <label className="txt8">{itemDetail[0].rating_count[4]}</label>
                                                    </div>
                                                </div>
                                                <div className="row rating-a ">
                                                    <div className="col-md-9 star">
                                                        <StarRatings
                                                            starRatedColor="#FFD203"
                                                            rating={1}
                                                            starDimension="12px"
                                                            starSpacing="4px"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 count">
                                                        <label className="txt8">{itemDetail[0].rating_count[5]}</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-5">
                        <div className="card infor">
                            <div className="card-header"><h6>Thông tin giá</h6></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giá bán </h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h6>{this.number_format(parseFloat(itemDetail[0].price), 0, '.', ',') } đ</h6></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giá cao nhất </h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h6> {this.number_format(parseFloat(itemDetail[0].price_max), 0, '.', ',') } đ </h6></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giá thấp nhất </h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h6>{this.number_format(parseFloat(itemDetail[0].price_min), 0, '.', ',') } đ  </h6></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giảm giá (%)</h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h6>{discount}</h6></label>
                                    </div>
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
        itemIdSelected: state.itemIdSelected,
        shopNameSelected: state.shopNameSelected,
        listItems: state.listItems
    }
}
export default connect(mapStatetoProps, null)(ItemsDetail);
