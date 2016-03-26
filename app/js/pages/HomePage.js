'use strict';

import React, { Component } from 'react';
import { Link }             from 'react-router';
import DocumentTitle        from 'react-document-title';

import SearchBar            from '../containers/search_bar';
import WeatherList          from '../containers/weather_list';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <SearchBar />
          <WeatherList />

          <div>
            <Link to="/sample">Sample</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

export default HomePage;
