import React from 'react'
// import {Button, Icon} from 'react-materialize'

// eslint-disable-next-line
var NewTodo = React.createClass({
  render: function() {
    return (
              <div className="input-field">
                <input id="task" type="text" className="validate"/>
                <label htmlFor="task" >What should be done?</label>
              </div>
    )
  }
})

export default NewTodo;
