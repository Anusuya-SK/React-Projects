import { FormControlLabel, FormGroup, ListItem, Checkbox, Typography, IconButton, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { useDispatch } from 'react-redux'
import { TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT } from "../redux/actions";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function TodoItem({id, title, completed, important}) {
    const dispatch = useDispatch();

    function toggleCompleted() {
        dispatch({
            type: TOGGLE_COMPLETED,
            payload: {
                id,
            },
        });
    }

    function deleteTodo(){
        dispatch({
            type: DELETE_TODO,
            payload: {
                id,
            }
        })
    }

    function toggleImportant(){
        dispatch({
            type: TOGGLE_IMPORTANT,
            payload: {
                id,
            }
        })
    }

  return (
   <ListItem dense 
   secondaryAction={
    <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton edge="end" onClick={toggleImportant}>
            {important ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
        <IconButton edge="end" onClick={deleteTodo}>
            <DeleteIcon />
        </IconButton>
    </Box>
    }>
        <FormGroup>
            <FormControlLabel
                label={<Typography 
                    style={{textDecoration: completed && "line-through"}}>
                    {title}
                </Typography>}
                control={
                    <Checkbox
                        checked={completed}
                        name={title}
                        color='primary'
                        onChange={toggleCompleted}
                    />
                }
                >
            </FormControlLabel>
        </FormGroup>
   </ListItem>
  )
}
