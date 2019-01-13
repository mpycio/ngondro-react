import React, { Component } from 'react';
import { css, Global } from '@emotion/core';
import { Header } from './core/Header';
import { Home } from './home/Home';
import { Practice } from './practice/Practice';
import { Router } from "@reach/router"
import { AppService } from './core/AppService';

class App extends Component {

  appService = new AppService();

  state = {
    practices: [],
    selectedPractice: Practice,
  };

  componentDidMount(): void {
    this.appService.getPractices()
      .then(practices => this.setState({practices}))
  }

  render() {
    return (
      <div
        className="App"
        css={css`
          display: flex;
          height: 100vh;
        `}
      >
        <Global
          styles={css`
            html, body {
              margin: 0;
              padding: 0;
              height: 100vh;
            }

            * {
              box-sizing: content-box;
            }
        `}
        />
        <Header />
        <Router>
          <Home path="/" practices={this.state.practices} />
          <Practice path="practice"/>
        </Router>
      </div>
    );
  }
}

export default App;
