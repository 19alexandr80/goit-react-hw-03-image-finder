import React from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';

import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
} from 'components/searchbar/SearchbarStyled.styled';

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
      <SearchbarStyled>
        <SearchFormStyled onSubmit={this.formSubmit}>
          <SearchFormButtonStyled type="submit">
            <BiSearch className="SearchForm-button-label" />
          </SearchFormButtonStyled>
          <SearchFormInputStyled
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.name}
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
