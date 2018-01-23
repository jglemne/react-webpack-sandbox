## React Webpack Sandbox

#### Requirements

Tested on Mac OS X 10.12.6
- yarn v1.3.2
- Docker v17.12

#### Build static files

First, install the packages specified in `package.json`:

```bash
yarn install
```

Then, to actually build the static files, the `package.json` file currently specifies four different (working) ways of building the static files and place them in a `dist` folder. These `run` commands triggers the project bundler `webpack` to perform different tasks, depending on the specified environment. All commands will build static resource-files, including `bundle.<HASH-KEY>.js` and `styles.<HASH-KEY>.css`. These two files will have a `<HASH-KEY>` that is based on the current git-revision, in order to both break the user cache when updated appearance and aid debugging.

This, however, means that in order to build the static files a first `git commit` must have been performed.

After setting up git, these are the four currently possible commands:

```bash
yarn run watch # continuously listen for changes in the code and update in development environment
yarn run development # same as above without continuous update
yarn run staging # building static files for staging environment
yarn run production # building static files for production environment
```

#### Docker

The repository currently includes a ridiculously simple `Dockerfile` that places the static files in the `html` folder of a standard nginx server. To build the image and instantiate a container, perform these two commands:

```bash
docker build -t <IMAGE-NAME>:<TAG> <PATH/TO/DOCKERFILE>
docker run -d -p <PUBLISHED-PORT>:80 <IMAGE-NAME>:<TAG>
```

#### Environment specifics

Hosts and ports of backend and frontend are controlled and specified in `assets/js/config.jsx`.
