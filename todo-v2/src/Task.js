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

  getInitialState: function() {
    return {
      visible: false
    };
  },

  readmoreClick: function(e) {
    e.preventDefault();
    this.setState({visible:true});
    console.log('yee');
  },

  render: function() {
    var task = this.props.data.task,
        time = this.props.data.time,
        visible = this.state.visible;

    return (
      <CollectionItem className={(visible ? 'hidetask': 'valign-wrapper')} style={{padding:"0 10px"}}>
        <input type="checkbox" className="filled-in" id={task} style={{display:"inline-block"}}/>
        <label htmlFor={task}>{task}</label>
        <p className="valign-wrapper" style={{marginLeft:"20px"}}>Total time is: {time}
        <Icon right small className="material-icons right-align" style={{cursor:"pointer", lineHeight:"2"}}>play_arrow</Icon>
        <Icon right small onClick = {this.readmoreClick } className="close material-icons right-align" style={{cursor:"pointer", lineHeight:"2"}}>close</Icon>
      </p>
      </CollectionItem>
    )
  }
})

export default Task
