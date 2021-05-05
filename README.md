# Checker Framework Theia
## Getting started
1. Install yarn
```
npm install -g yarn
```

2. Run the setup script
```
yarn run setup
```

3. Build the packages
```
yarn run prepare
```

Now, the node_modules should be installed and the Theia packages should be setup and ready for development.
## Running it in the Browser
1. Rebuild it for the browser
```
yarn run rebuild:browser
```

2. Start it for the browser
```
yarn run start:browser
```

Open http://localhost:3000 in the browser and the Theia application should appear.

## Running it in Electron
1. Rebuild it for Electron
```
yarn run rebuild:electron
```

1. Start it for Electron
```
yarn run start:electron
```

The Electron app should open.

## Folder Structure
### browser-app
This folder contains the npm package for the Browser Application of Theia.

### checkerframeworkdemo
This folder contains the npm package for the Checker Framework Demo extensions for Theia.

### electron-app
This folder contains the npm package for the Electron Application of Theia.

### plugins
This folder contains the VSCode plugins incuded in the Theia IDE. It includes the following plugins:

- Checker Framework
- Java