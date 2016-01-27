# nodeGPIOdemo
Demo application to access/control the Toradex VF61 GPIO using Node.js

## Description
This application uses the Toradex Colibri VF61 + Iris Carrier Board to read 3 switches by polling their GPIO and copy their values to 3 
corresponding LEDs, by accessing the file system (/sys/class/gpio).

This demo is part of an article on how to access/control the GPIO via web with a friendly UI (Demo 1), so the following repositories are enhanced 
versions of the current application:

[Demo 2 - Control one GPIO via web using Node.js](https://github.com/leograba/WebNodeGPIOdemo.git)
[Demo 3 - Control multiple GPIO via a friendly web UI, using Node.js](https://github.com/leograba/WebNodeMultiGPIOdemo.git)

# Dependencies
To run this application some node modules need to be installed:

  [Debug](https://www.npmjs.com/package/debug) (already installed with Express):
    npm install debug # anyway if you need it for other projects

### How to run this app
After installing the dependencies you can run the application using Node. 

To run it you need just to:
	node server.js

To display log messages:
	DEBUG=myserver node server.js

# Helpful modules
To help the development of node applications, there are some modules that can be useful
  
  [Nodemon](http://nodemon.io/):
    npm install -g nodemon # restart the app whenever a file within the project changes