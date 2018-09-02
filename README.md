# frontrend starter kit with ReactJS and Docker
### Work in Progress 
**updated: sep 2, 2018**

An opnionated boilerplate to start SSR/nonSSR frontend application based on ReactJS and NextJS for me.
There are excellent starter kits out there but when i started with React they seemed initimidating.
There were so many magic behind and it was hard for me to grasp all of that. 
So i started with a basic starter kit and then it became something like this.
I will try to keep it simple and dumb as much as possible so not to be overwhelmed myself :stuck_out_tongue_winking_eye:

- Table of Contents
  - [Folder Structure](#folder-structure)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Tech Stack](#teck-stack)
  - [Todo](#todo)


### Folder Structure
```bash
├── build                           # build files reside here
├── config                          # webpack, nextjs buld config files
│   ├── constants.js                # config variables
│   ├── webpack.common.js           # common webpack build configurations
│   ├── webpack.development.js      # development mode webpack config build configurations
│   ├── webpack.next.js             # webpack config entry file for when using nextjs
│   ├── webpack.parts.js            # webpack configuration parts in functions
│   ├── webpack.production.js       # production mode webpack config build configurations
│   ├── webpack.run.js              # webpack config entry file for when not using nextjs
├── node_modules
├── pages                           # nextjs route pages
│   ├── _document.js                # nextjs page template override
│   ├── index.js                    # home(/) page
│   ├── login.js                    # loign(/login) page
├── scripts                         # Project operation scripts
│   ├── bash.py                     # enters fullstack-frontend container
│   ├── down.py                     # stops containers 
│   ├── init-project.py             # bootstraps by changing config files for this and frontend and backend repo
│   ├── log.py                      # logs output of **nginx-gen** container
│   ├── rebuild.py                  # cleans up old containers, volumes
│   ├── up.py                       # starts containers defined in docker-compose files
│   ├── utils.py                    # utility function to be used with other scripts
│   ├── .gitgignore
├── server                          
│   ├── routes.json                 # route config for nextjs express server
│   ├── server.js                   # express server for nextJS 
├── static                          # static assets (images, fonts etc) for nextjs to server from /static route
│   ├── images
├── .babelrc 
├── .dockerignore 
├── .env.development                # environtment variables for react app 
├── .env.docker.development         # docker environtment variables for development config
├── .eslintrc
├── .gigignore
├── docker-compose.override.yml     # development config
├── docker-compose.production.yml   # production configs
├── docker-compose.yml              # common configs
├── Dockerfile                      # frontend container image definition
├── next.config.js                  # nextjs build config file
├── nodemon.json                    # nodemon config file
├── package.json                    
├── README.md
├── yarn.lock

```

### Quick Start

```bash
# Clone the repository
git clone https://github.com/dostokhan/frontend-start 
# Go inside the directory
cd frontend-start

# Configure containers with desired project name.
cd scripts

./init-project.py
# Asks for **Project Name**, **Domain Name**, **Email Address* 
# Updates docker container config files and replaces 'fullstack' with given **Project Name**. i.e. network name
#   1. ./docker-compose.yml
#   2. ./docker-compose.override.yml
#   3. ./docker-compose.production.yml

# Start development containers
./up.py

# Run test
./bash.py       # get inside fullstack-frontend container
yarn jest test  # run test command

# Install/Remove node packages
./bash.py       # get inside fullstack-frontend container and run yarn add/remove packages

# Stop container
./down.py

# See build output log
./log.py
```

## Documentation

### Tech Stack
1. ReactJS
2. NextJS
3. Docker
4. Webpack
5. Styled Component
6. Jest
7. Enzyme

## Todo
-  [ ] Better organize scripts and remove redundency
-  [ ] Remove unnecessary code, config etc specially nextjs and webpack config
-  [ ] Test deploy a demo app

