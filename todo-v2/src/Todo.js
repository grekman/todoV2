import React from 'react'
import Task from  './Task'

// eslint-disable-next-line
var Todo = React.createClass({
  render: function() {
    var data = this.props.data;
    var todoTemplate;

    if (data.length > 0) {
      todoTemplate = data.map(function(item, index){
        return (
          // <li key={index} className="collection-item">
            <Task data={item} key={index}/>
          // </li>
        )
      });
      return (
        <ul className="collection">
          {todoTemplate}
        </ul>
      )
    }
  }
})

export default Todo
