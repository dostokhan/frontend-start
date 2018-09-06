import React, { Component, Fragment } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Head from 'next/head';

import initialize from '@Utils/initialize';
import Layout from '@Components/Layout/Layout';
import User from '@Routes/User/User';
import {
  getUserByUsername,
  fetchUser,
} from '@Redux/modules/user';

class UserIndex extends Component {
  // static getInitialProps({ store, isServer, query }) {
  static getInitialProps(ctx) {
    initialize(ctx);
    console.log('QUERY-----------------------------------------');
    console.log(ctx.query);

    const state = ctx.store.getState();
    const user = getUserByUsername(state, ctx.query);

    if (!user) {
      if (ctx.isServer) {
        return ctx.store.dispatch(fetchUser(ctx.query.username))
          .then(() => ctx.query);
      }

      return ctx.store.dispatch(fetchUser(ctx.query.username));
    }

    return ctx.query;
  }

  render() {
    return (
      <Layout>
        <Fragment>
          <Head>
            <title>/u/{this.props.url.query.username}</title>
          </Head>
          <User username={this.props.url.query.username} />
        </Fragment>
      </Layout>
    );
  }
}
UserIndex.propTypes = {
  url: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser,
  }, dispatch);

// export default UserIndex;
export default withRedux(create, null, mapDispatchToProps)(UserIndex);


// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     fetchNote,
//   }, dispatch);

// // export default NoteIndex;
// export default withRedux(create, null, mapDispatchToProps)(NoteIndex);

// import React, { Component, Fragment } from 'react';
// import create from 'redux/create';
// import withRedux from 'next-redux-wrapper';
// import { bindActionCreators } from 'redux';
// import Head from 'next/head';

// import App from 'App/App';
// import Note from 'Note/Note';
// import {
//   noteContentBySlug,
//   fetchNote,
// } from 'redux/modules/note';

// class NoteIndex extends Component {
//   static getInitialProps({ store, isServer, query }) {
//     const state = store.getState();
//     const note = noteContentBySlug(state, query);

//     if (!note) {
//       if (isServer) {
//         return store.dispatch(fetchNote(query.slug))
//           .then(() => query);
//       }

//       return store.dispatch(fetchNote(query.slug));
//     }

//     return query;
//   }

//   render() {
//     return (
//       <App>
//         <Fragment>
//           <Head>
//             <title>{this.props.slug}</title>
//           </Head>
//           <Note slug={this.props.slug} />
//         </Fragment>
//       </App>
//     );
//   }
// }

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     fetchNote,
//   }, dispatch);

// // export default NoteIndex;
// export default withRedux(create, null, mapDispatchToProps)(NoteIndex);
