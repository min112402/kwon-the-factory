import React from 'react'
import './ItemList.css'
import { Route,Link } from "react-router-dom"
import {Dropdown} from 'react-bootstrap'
import _ from 'lodash'
import frame4 from "../../frame4.png"
import frame2 from "../../frame2.png"

class ItemList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            goods : [],
            sortColumn : { path : 'production_date', order : 'asc'}
        }
    }
    componentDidMount() {
        fetch("/api/goods/")
            .then(response =>response.json())
            .then(goodsList => {
                this.setState({goods: goodsList})
            })
    }
    handleSort(path) {
		     const sortColumn = { ...this.state.sortColumn };
		      if (sortColumn.path === path) sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		      else {
			           sortColumn.path = path;
			           sortColumn.order = 'asc';
		           }
		      this.setState({ sortColumn });
	 };


    render(){
        const { sortColumn, goods } = this.state;
        const sorted = _.orderBy(goods, [sortColumn.path], [sortColumn.order]);
        return(
            <div>
                <div className="itemListNav">
                  <button onClick = {() => this.handleSort('production_date')} >날짜</button>
                  <button onClick = {() => this.handleSort('price')} >가격</button>
                  <button onClick = {() => this.handleSort('name')} >이름</button>
                </div>
                <div className="itemContainerWrapper">
                    <div className="itemContainer">
                        {sorted.map((goods) =>(
                            <Link to= {this.props.match.path + "/"+ goods.name} key = {goods.id}>                        
                                <div className="item" >
                                    <div className="frameWrapper">
                                        <img className="frame" src={frame4}/>
                                        <img className="thumbnail" src = {goods.thumbnail}  />
                                    </div>
                                    <span>
                                        {goods.name}
                                    </span>
                                    <span>
                                        {goods.price}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemList
