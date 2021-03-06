import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';


class ListDoithu extends Component {

    isOnFollowing = (event) => {
        event.preventDefault();
        let indexItem = this.props.indexItem;
        let rivalItemid = this.props.rivalItemid;
        let rivalShopid = this.props.rivalShopid
        this.props.isOnFollowing(indexItem, rivalShopid, rivalItemid);
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
       
        let rating_star_item = Math.round(this.props.rating_star * 100) / 100;
        let rating_star_rival_shop = Math.round(this.props.rating_star_rival_shop * 100) / 100;
        let Ischosen;
        if (this.props.isFollowing) Ischosen = <label className="text-primary">Đã chọn</label>;
        else Ischosen = <button className="btn btn-primary m-l-5 button" onClick={this.isOnFollowing} >Chọn</button>

        return (
            <tr>

                <td className="doithu">  {this.props.dulieu ? this.props.nameRival : <Skeleton count={3} />} </td>
                <td className="doithu text-center">{this.props.dulieu ? rating_star_rival_shop : <Skeleton count={3} />} </td>
                <td className="doithu text-center"> {this.props.dulieu ? this.props.follower_count : <Skeleton  count={3}/>}</td>
                <td className="doithu">
                    <div className="row">

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            {this.props.dulieu ? <img className="img-toy3 m-r-7" src={this.props.images} alt="anh" /> : ""}
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            {this.props.dulieu ? this.props.name : <Skeleton count={3}/>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            {this.props.dulieu ? <div><span className="text-danger">{rating_star_item}</span>/5</div> : ""}
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            {this.props.dulieu ? <div className="text-right"><span className="text-danger">{this.props.sold}</span> đã bán</div> :""}
                        </div>
                    </div>
                </td>
                <td className="doithu text-center">  {this.props.dulieu ? this.number_format(parseFloat(this.props.price), 0, '.', ',')  : <Skeleton count={3} />} </td>
                <td className="doithu">
                    {this.props.dulieu ? Ischosen : "" }
                </td>
            </tr>


        );
    }
}

export default ListDoithu;