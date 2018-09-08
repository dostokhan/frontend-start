# create image based on official node 8.10 image from Docker
FROM node:8.10

# create and use nonroot user
RUN groupadd -r appuser && useradd -m -r -g -s /bin/bash appuser appuser
USER appuser

# set environment
ENV NPM_CONFIG_LOGLEVEL warn


# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /home
COPY package.json yarn.lock* ./
RUN yarn install && yarn cache clean
ENV PATH /home/node_modules/.bin:$PATH

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s CMD node healthcheck.js

# copy in our source code last, as it changes the most
WORKDIR /home/app
COPY . /home/app

# run app
CMD [ -f "/bin/bash" ] && if [ ${NODE_ENV} = production ]; \
  then \
  yarn buildnext; \
  yarn start; \
  else \
  # run development server
  yarn devnext; \
  fi


