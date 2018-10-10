import React, { Component } from 'react';

export default class test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
    console.log('mounted');
  }

  //   componentWillMount() {
  // console.log('will mount');
  //   }

  //   componentDidUpdate(){}
  //

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>test</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}
