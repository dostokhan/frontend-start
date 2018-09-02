# create image based on official node 8.10 image from Docker
FROM node:8.10

# set environment
ENV NPM_CONFIG_LOGLEVEL warn

# set app home
ENV APP=/home/app

# copy dependency lock files
COPY ./package.json $APP/package.json 
COPY ./yarn.lock $APP/yarn.lock
COPY ./.babelrc $APP/.babelrc
COPY ./.env $APP/.env
# COPY ./.env.production $APP/.env.production

WORKDIR $APP

# install dependencies
RUN yarn --pure-lockfile

# run app
CMD [ -f "/bin/bash" ] && if [ ${NODE_ENV} = production ]; \
  then \
  yarn buildnext; \
  yarn start; \
  else \
  yarn --pure-lockfile; \
  # run development server
  yarn devnext; \
  fi


