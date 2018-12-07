import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {  // to allow access to this.props (that is not actually needed here :) )
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if(this.state.hasError) {
      return <h1>Ooooops, not working</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;
