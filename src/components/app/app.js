import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'dsfsdfdsfdsf', important: false, id:'fff'},
                {label: 'dz,z,z,,z,z,', important: true, id:'gg'},
                {label: 'efrrgrgrrrr', important: false, id:'ddd'}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }

    addItem(body){
        console.log(body);
    }

    render() {
        return (
            <div className = "app">
                <AppHeader/>
                <div className = "search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts = {this.state.data}
                    onDelete = {this.deleteItem}
                    />
                <PostAddForm
                    onAdd = {this.addItem}/>
            </div>
        );
    }
}

