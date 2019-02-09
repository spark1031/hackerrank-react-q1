import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sortedBy: "name",
    };
    this.sort = this.sort.bind(this);
  }

  sort(filter) {
    if (filter === "name") {
      this.setState({ sortedBy: "name" });
    } else {
      this.setState({ sortedBy: "age" });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter sorter={this.sort} sortedBy={this.state.sortedBy}></Filter>
        <RecordTable sortedBy={this.state.sortedBy}></RecordTable>
      </div>
    );
  }
}

export default App;
