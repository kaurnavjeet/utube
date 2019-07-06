import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "Search uTube"
    };
  }
  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="Search">Search</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="search"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
