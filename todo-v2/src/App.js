import React from 'react';
import {Row, Col, Collection} from 'react-materialize'
import './App.css';
import NewTodo from './NewTodo'
import Todo from './Todo'

var todo = [{
  "task" : "task 1",
  "time" : "00:00:00"
},
{
  "task" : "task 2",
  "time" : "00:00:00"
},
{
  "task" : "task 3",
  "time" : "00:00:00"
},
{
  "task" : "task 4",
  "time" : "00:00:00"
},
{
  "task" : "task 5",
  "time" : "00:00:00"
}]

// eslint-disable-next-line
var App = React.createClass({
  render: () => {
    return (
      <Row>
        <h1>Create your plans</h1>
        <Col l={6} m={8} s={12} className="main">
        <NewTodo/>
        <Todo data={todo}/>
      </Col>
    </Row>
    )
  }
})

export default App;
