import { Box, Divider, Grid, List, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './todo-item';

const useStyles = makeStyles(() => ({
    root: {
        padding: 20,
        margin: 20,
        backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
    }
}))

export default function TodoContainer() {
    const classes = useStyles();
    const { todos } = useSelector((state) => {
        return {
            todos: state.todos,
        };
    });
    const prioritisedTodos = (function prioritise() {
        const importantTodos = [];
        const notImportantTodos = [];

        todos.forEach((todo) => {
            if(todo.important) {
                importantTodos.push(todo);
            } else {
                notImportantTodos.push(todo);
            }
        });

        return importantTodos.concat(notImportantTodos);
    })();
  return (
    <Box className={classes.root}>
        <Grid container spacing={2}>
            <Grid size={6}>
                <Typography align="left" variant="h5" gutterBottom>My Todos</Typography>
                <Divider />
                <List>
                    {prioritisedTodos.map((todo) => {
                        if(!todo.completed) {
                            return <TodoItem {...todo} />
                        }
                    })}
                </List>
            </Grid>
            <Grid size={6}>
                <Typography align="left" variant="h5" gutterBottom>Completed</Typography>
                <Divider />
                <List>
                    {prioritisedTodos.map((todo) => {
                        if(todo.completed) {
                            return <TodoItem {...todo} />
                        }
                    })}
                </List>
            </Grid>
        </Grid>
    </Box>
  )
}
