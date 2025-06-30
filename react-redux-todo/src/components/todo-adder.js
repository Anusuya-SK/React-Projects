import { Box, Button, TextField } from '@mui/material';
import React, { useRef, useState } from 'react'

import { ADD_TODO } from "../redux/actions";
import { useDispatch } from 'react-redux';


export default function TodoAdder() {
    const[title, setTitle] = useState(null);
    const titleRef = useRef(null);
    const dispatch = useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }
    function addTodoItem() {
        if(title) {
            dispatch({
                type: ADD_TODO,
                payload: {
                    title,
                },
            });
            setTitle(null);
            titleRef.current.value = "";
        }
    }
  return (
    <Box>
        <TextField style={{
            width: 400
        }} label="Add new todo" variant="filled" onChange={handleTextChange} inputRef={titleRef}></TextField>
        <Button style={{
            height: 55
        }} variant="contained" color='primary' onClick={addTodoItem}>Add</Button>
    </Box>
  )
}
