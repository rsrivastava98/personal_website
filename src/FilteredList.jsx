import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    this.setState({ type: event});
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {

    return item.type == this.state.type || this.state.type == "all"
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item);
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Cereal Search</h1>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <DropdownButton title="Type" id="dropdown-basic-button">
          <Dropdown.Item eventKey="Circular" onSelect={this.onSelectFilterType}>
            Circular
          </Dropdown.Item>
          <Dropdown.Item eventKey="Square" onSelect={this.onSelectFilterType}>
            Square
          </Dropdown.Item>
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterAndSearch)} />
      </div>
    );
  }
}

export default FilteredList;
