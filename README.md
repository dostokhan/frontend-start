# fullstack docker container kit 
### Work in Progress 
**updated: sep 1, 2018**

An opnionated boilerplate to start SSR/nonSSR frontend application based on ReactJS and NextJS.


- Table of Contents
  - [Introduction](#introduction)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
  - [Quick Start](#quick-start)
  - [Todo](#todo)

## Introduction


## Documentation
### Folder Structure
```bash
├── build # build files reside here
├── config
│   ├── constants.js
│   ├── webpack.common.js
│   │   webpack.development.js
│   │   webpack.next.js
│   │   webpack.parts.js
│   │   webpack.production.js
│   │   webpack.run.js
├── conf.d # docker volume mounts here
├── node_modules
├── pages
│   ├── _document.js
│   ├── index.js
│   ├── login.js
├── scripts # Project operation scripts
│   ├── bash.py # enters fullstack-frontend container
│   ├── down.py # stops containers defined in docker-compose files
│   ├── init-project.py # bootstraps by changing config files for this and frontend and backend repo
│   ├── log.py # logs output of **nginx-gen** container
│   ├── rebuild.py # cleans up old containers, volumes
│   ├── up.py # starts containers defined in docker-compose files
│   ├── utils.py  
│   ├── .gitgignore
├── server 
│   ├── routes.js
│   ├── server.js
├── server 
├── static 
│   ├── images
│   ├   ├── favicon
│       ├── favicon

├── docker-compose.override.yml # development configs
├── docker-compose.production.yml # production configs
├── docker-compose.yml # common configs
├── LICENSE
├── nginx.tmpl # downloaded from https://raw.githubusercontent.com/jwilder/docker-gen/master/templates/nginx.tmpl
├── README.md
```

### Quick Start

```bash
# Clone the repository
git clone https://github.com/dostokhan/fullstack-start 
# Go inside the directory
cd fullstack-start

# optionally get latest nginx template file 
curl -o nginx.tmpl https://raw.githubusercontent.com/jwilder/docker-gen/master/templates/nginx.tmpl

# Configurare containers with desired project name.
cd scripts
./init-project.py
# Asks for **Project Name**, **Domain Name**, **Email Address* 
# Updates docker container config files and replaces 'fullstack' with given **Project Name**. i.e. network name
#   1. ./docker-compose.yml
#   2. ./docker-compose.override.yml
#   3. ./docker-compose.production.yml
# Generates local CA and SSL certitificates to be used for local development. local CA should be imported to Chrome to see green on https.
# for production letsencrypt-nginx-proxy-companion container manages SSL certificates from letsencrypt
#   1. ./certs/local/ca.crt
#   2. ./certs/local/ca.key
#   3. ./certs/local/ca.srl
#   4. ./certs/local/local.{domainName}.crt
#   5. ./certs/local/local.{domainName}.key
#   6. ./certs/local/local.{domainName}.srl
#   7. ./certs/local/local.api.{domainName}.crt
#   8. ./certs/local/local.api.{domainName}.key
#   9. ./certs/local/local.api.{domainName}.srl
# Runs init-project.py from frontend and backend to initialize there config files. better documented in their respective repository.

# update /etc/hosts file with 'local.{domainName}' and 'local.api.{domainName}' pointing to 127.0.0.1.

# Start development containers
./up.py
```

## Todo
-  [ ] Update script files to have colored output for better understanding
-  [ ] Better organize scripts and remove redundency
-  [ ] Test this to develop and deploy a demo application

