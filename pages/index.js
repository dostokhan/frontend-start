import React, { PureComponent } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import {
  getKhoborIds,
  fetchKhoborList,
} from 'redux/modules/khobor';
import Layout from '@Components/Layout/Layout';
import Home from 'routes/Home/Home';
import initialize from 'utils/initialize';

class Index extends PureComponent {
  static getInitialProps(ctx) {
    initialize(ctx);

    const state = ctx.store.getState();
    const khoborIds = getKhoborIds(state);

    if (khoborIds.length === 0) {
      if (ctx.isServer) {
        // console.log(ctx.query);
        return ctx.store.dispatch(fetchKhoborList());
      }

      // return ctx.store.dispatch(fetchKhoborList());
    }

    return true;
  }

  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchKhoborList,
  }, dispatch);

// export default Index;
export default withRedux(create, null, mapDispatchToProps)(Index);
