import './App.css';
import Form from './components/Form';
import List from './components/List';
import React from 'react';

class App extends React.Component {
  state = {
    todos: [
      {
        text: 'Do my homework',
        isComplete: false,
      },
      {
        text: 'Wash my shoes',
        isComplete: false,
      },
    ],
    input: '',
  };

  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleAddtodo = () => {
    const todos = this.state.todos;
    todos.push({
      text: this.state.input,
      isComplete: false,
    });
    this.setState({
      todos,
      input: '',
    });
  };

  handleDleteTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      ...this.state,
      todos,
    });
  };

  handleCompleteTodo = (index) => {
    const todos = this.state.todos;
    todos[index].isComplete = !todos[index].isComplete;
    this.setState({
      ...this.state,
      todos,
    });
  };

  render() {
    return (
      <div className='App'>
        <List
          handleCompleteTodo={this.handleCompleteTodo}
          todos={this.state.todos}
          handleDleteTodo={this.handleDleteTodo}
        />
        <Form
          handleAddtodo={this.handleAddtodo}
          input={this.state.input}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
