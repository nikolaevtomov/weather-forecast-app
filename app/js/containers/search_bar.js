'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(e) {
    this.setState({ term: e.target.value })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit={ this.onFormSubmit } className={`search`}>
        <div className={`search__input`}>
          <input
            className={`search__input--in`}
            placeholder="Search a city"
            value={ this.state.term }
            onChange={ this.onInputChange }
           />
        </div>
        <div className={`search__btn`}>
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
