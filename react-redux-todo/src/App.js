import React from 'react';
import { makeStyles } from "@mui/styles";

import { AppBar, Toolbar, IconButton, Typography, Box, Container, Paper } from "@mui/material";

import TodoAdder from "./components/todo-adder";
import TodoContainer from "./components/todo-container";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0
  },
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100
  },
  wrapper: {
    textAlign: "center",
    width: "100%"
  },
}));

function Todos() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit'>
            <img 
              alt='ASK Todos'
              style={{width: '50px'}}
              src='logo.png'
            />
          </IconButton>
          <Typography variant="h5">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          <TodoAdder />
          <TodoContainer />
        </Paper>
      </Container>
    </Box>
  )
}

export default Todos