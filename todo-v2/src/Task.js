import React from 'react';
import {Icon, CollectionItem } from 'react-materialize'

// eslint-disable-next-line
var Task = React.createClass({
  propTypes:{
    // eslint-disable-next-line
    data: React.PropTypes.shape({
      // eslint-disable-next-line
      task: React.PropTypes.string.isRequired,
      // eslint-disable-next-line
      time: React.PropTypes.string.isRequired
    })
  },

  getInitialState: () => {
    return {
      visible: false
    };
  },

  readmoreClick: function(e) {
    console.log(e);
    e.preventDefault();
    this.setState({visible:true});
    console.log('yee');
  },

  render: function() {
    let task = this.props.data.task,
        time = this.props.data.time,
        visible = this.state.visible;

    return (
      <CollectionItem className={(visible ? 'hidetask':'valign-wrapper yellow lighten-2')} style={{padding:"0 10px"}}>
        <input type="checkbox" className="filled-in" id={task} style={{display:"inline-block"}}/>
        <label htmlFor={task}>{task}</label>
        <p className="valign-wrapper" style={{marginLeft:"auto"}}>Total time is: {time} </p>
        <div className="p-icon">
          <Icon className="start material-icons">play_circle_outline</Icon>
        </div>
        <div className="p-icon" onClick={this.readmoreClick }>
          <Icon  className="close material-icons">close</Icon>
        </div>

      </CollectionItem>
    )
  }
})

export default Task
