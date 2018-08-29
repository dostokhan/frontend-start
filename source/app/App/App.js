import React, { PureComponent } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
// import { Provider } from 'react-redux';
import normalize from 'normalize.css';
import milligram from 'milligram';

// import create from 'redux/create';
import theme from 'ui/theme';
import {
  initGA,
  logPageView,
} from 'utils/analytics';
// import {
//   setToken,
// } from 'redux/modules/auth';

import './App.css';

import Header from './Header/Header';

const AppBody = styled.div`
  min-height: 100vh;
  position: relative;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;

class App extends PureComponent {
  componentDidMount() {
    if (PRODUCTION) {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }

    // this.checkLoginState();
  }

  // checkLoginState() {
  //   const savedToken = sessionStorage.getItem('mj-token');
  //   if (savedToken) {
  //     this.props.setToken(savedToken);
  //   }
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBody>
          <Header />
          { this.props.children }
        </AppBody>
      </ThemeProvider>
    );
  }
}
App.propTypes = {
  // setToken: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     setToken,
//   }, dispatch);
// export default connect(null, mapDispatchToProps)(App);
export default App;
