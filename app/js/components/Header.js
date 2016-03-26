'use strict';

import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>

        <h3>Weather Forecast App</h3>
        <p>Get a five-day weather forecast for your favourite city.</p>

      </header>
    );
  }

}

export default Header;
