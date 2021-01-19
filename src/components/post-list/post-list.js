import React from "react";

import PostListItem from "../post-list-item";
import {ListGroup} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;

        return(
            <li key = {id} className = "list-group-item">
                <PostListItem {...itemProps}
                // label = {item.label}
                // important = {item.important} //старый формат, без деструктуризации
                onDelete = {() => onDelete(id)}
                />
            </li>
        )
    })

    return(
        <ListGroup className = "app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;