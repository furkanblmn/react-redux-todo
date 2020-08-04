import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from "../store/actions/todo";

export default function Form() {
    const [text, setText] = useState()
    const dispatch = useDispatch();

    function addItem(e) {
        setText(e.target.value)
    }
    function button(e) {
        e.preventDefault();
        if(text !== ""){
            dispatch(add(text))
        }
        setText("")
    }

    return (
        <form onSubmit={button}>
            <input className="form-control" value={text} onChange={addItem}></input>
            <button className="btn btn-success mt-2 float-right">ADD TODO</button>
        </form>
    )
}
