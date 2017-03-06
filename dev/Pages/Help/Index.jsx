import './style.css' 
import React from 'react'
import setMinHeight from '../../Mixins/setMinHeight'

const Help = React.createClass({
  mixins:[setMinHeight],
  componentDidMount: function() {
  },
  render: function() {
    var html = 'var a=124;'
    return (
          <div className="start" style={{ minHeight: this.state.height+"px"}}>
            <div className="contents">
              <h1>帮助中心</h1>
            </div>
          </div>
      );
  }
});
//关于我们
module.exports = Help;