import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p> Hey! </p>
      </div>
    )
  }
}

export default Content
