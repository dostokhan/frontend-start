import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import {
  khoborList,
  fetchKhoborList,
} from 'redux/modules/khobor';
import App from 'App/App';
import Home from 'routes/Home/Home';
import initialize from 'utils/initialize';

// NOTE: if cookie is needed
// import jsHttpCookie from 'cookie';

// class MyPage extends Component {
//   static async getInitialProps({ req }) {
//     const initProps = {};
//     if (req && req.headers) {
//       const cookies = req.headers.cookie;
//       if (typeof cookies === 'string') {
//         const cookiesJSON = jsHttpCookie.parse(cookies);
//         initProps.token = cookiesJSON.token;
//       }
//     }
//     return initProps;
//   }
// }

class Index extends PureComponent {
  static getInitialProps(ctx) {
    initialize(ctx);

    const state = ctx.store.getState();
    const khobors = khoborList(state);

    if (khobors.length === 0) {
      if (ctx.isServer) {
        // console.log(ctx.query);
        return ctx.store.dispatch(fetchKhoborList());
      }

      return ctx.store.dispatch(fetchKhoborList());
    }
  }

  render() {
    return (
      <App>
        <Home />
      </App>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchKhoborList,
  }, dispatch);

// export default Index;
export default withRedux(create, null, mapDispatchToProps)(Index);
