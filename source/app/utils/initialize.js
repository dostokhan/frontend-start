import Router from 'next/router';
import {
  signInSuccess,
  getToken,
} from 'redux/modules/auth';
import {
  getCookie,
} from 'utils/cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
const initialize = (ctx) => {
  let token = null;

  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      token = getCookie('mj-token', ctx.req);
      ctx.store.dispatch(signInSuccess(token));
    }
  } else {
    token = getToken(ctx.store.getState());
  }


  if (!token && ctx.pathname === '/login') {
    if (ctx.res) {
      ctx.res.writeHead(401, {
        Location: process.env.APP_URL,
      });
      ctx.res.end();
      ctx.res.finished = true;
    } else {
      Router.push('/');
    }
    // ctx.url.push('/');
    // this.props.
    // setTimeout(() => {
    //   Router.push('/');
    // }, 0);
  }
};

export default initialize;
