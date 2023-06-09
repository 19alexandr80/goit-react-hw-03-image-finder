import React from 'react';
import { BiSearch } from 'react-icons/bi';

export class Searchbar extends React.Component {
  state = {
    name: '',
  };

  ressetForm = () => {
    this.setState({ name: '' });
  };
  inputChange = e => {
    this.setState({ name: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.ressetForm();
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.formSubmit}>
          <button type="submit" className="SearchForm-button">
            <BiSearch className="SearchForm-button-label" />
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.name}
          />
        </form>
      </header>
    );
  }
}
