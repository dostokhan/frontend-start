import React, { Component, Fragment } from 'react';
import create from 'redux/create';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Head from 'next/head';

import initialize from 'utils/initialize';
import App from 'App/App';
// import Khobor from 'Khobor/Khobor';
import {
  // noteContentBySlug,
  fetchKhobor,
} from 'redux/modules/khobor';

class KhoborIndex extends Component {
  // static getInitialProps({ store, isServer, query }) {
  static getInitialProps(ctx) {
    initialize(ctx);
    // const state = store.getState();
    // const note = noteContentBySlug(state, query);

    // if (!note) {
    //   if (isServer) {
    //     return store.dispatch(fetchKhobor(query.slug))
    //       .then(() => query);
    //   }

    //   return store.dispatch(fetchKhobor(query.slug));
    // }

    // return query;
  }

  render() {
    return (
      <App>
        <Fragment>
          <Head>
            <title>hola title</title>
          </Head>
          go fuck yourself
        </Fragment>
      </App>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchKhobor,
  }, dispatch);

// export default KhoborIndex;
export default withRedux(create, null, mapDispatchToProps)(KhoborIndex);


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
