import React, { Component } from 'react';

class RivalChosen extends Component {
   
    DeleteFollowing = (e) => {
        e.preventDefault();
        let indexItem = this.props.indexItem;
        let itemid = this.props.itemid;
        let rivalShopid = this.props.rivalShopid;
      
        this.props.DeleteFollowing(indexItem, itemid, rivalShopid );
    }
    render() {
        return (
            <tr>
                <td>{this.props.nameRival}</td>
                <td className="text-right"><button className="btn btn-danger button" onClick = {this.DeleteFollowing}>Xóa</button></td>
            </tr>
        );
    }
}

export default RivalChosen;