import React, { Component } from 'react';
import Table from './Components/Table';
import Form from './Components/Form';
import Api from './Components/Api';
class App extends Component {
  state = {
    characters: [],
  }

  removeEmployee = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return index != i;
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>Employees</h1>
        <Table charactersData={characters} removeEmployee={this.removeEmployee} />
        <Form handleSubmit={this.handleSubmit} />
        <Api/>
      </div>
    )
  }
}

export default App;
