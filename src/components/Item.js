import React from 'react'
import { remove } from "../store/actions/todo";
import { useSelector, useDispatch } from 'react-redux'

export default function Item() {
    const { todo_item } = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div className="items">
            <h3 className="title">Todo List</h3>
            {
                todo_item ?
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    todo_item.map((item, index) =>
                                        <li className="list-group-item" key={index}>
                                            {item}
                                            <button onClick={() => dispatch(remove(index))} className="btn btn-warning float-right">Remove</button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div> : <div className="loading">Loading...</div>
            }
        </div>
    )
}
