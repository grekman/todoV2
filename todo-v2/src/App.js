import React from 'react';
import {Row, Col} from 'react-materialize'
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

    document.getElementsByTagName('body')[0].setAttribute("class", "yellow accent-3");
    return (
      <Row>
        <Col l={6} m={8} s={12} className="main z-depth-5">
          <h1>Create your plans</h1>
          <NewTodo/>
          <Todo data={todo}/>
        </Col>
    </Row>
    )
  }
})

export default App;
