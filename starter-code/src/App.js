import logo from "./logo.svg";
import users from "./users.json/users";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
  userList: users,
  searchValue: '',
  student: '',
  teacher: '',
  campus:''
  }
  // methods go here 
  
  handleSubmit = event => {
    event.preventDefault();
}
handleSearchChange = event => {
  console.log(event.target.value);
  console.log("this is submit")
  console.log(this.state.userList)
  let searchFiltered = users.filter( user => 
    user.lastName.toLowerCase().includes(event.target.value.toLowerCase())
  )
  console.log("searchFiltered", searchFiltered);
  this.setState((state, props) => ({
    userList: searchFiltered,
    searchValue: event.target.value
  }))
}
 
  render() {
     const filtered = this.state.userList;
     console.log(this.state.userList);
    return (
      <div className="App">
        <h1>IronBook</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search: </label>
          <input 
        type="text"
        name="search"
        id="search"
        value={this.state.searchValue}
        onChange={this.handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                  <td>{user.linkedin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
