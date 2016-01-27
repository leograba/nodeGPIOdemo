# nodeGPIOdemo
Demo application to access/control the Toradex VF61 GPIO using Node.js

## Description
This application uses the Toradex Colibri VF61 + Iris Carrier Board to read 3 switches by polling their GPIO and copy their values to 3 
corresponding LEDs, by accessing the file system (/sys/class/gpio).

This demo is part of an article on how to access/control the GPIO via web with a friendly UI, so the following repositories are enhanced 
versions of the current application:

[Control one GPIO via web using Node.js](https://github.com/leograba/WebNodeGPIOdemo.git)
[Control multiple GPIO via a friendly web UI, using Node.js](https://github.com/leograba/WebNodeMultiGPIOdemo.git)

### How to run it
Before running it you should have the [debug](https://www.npmjs.com/package/debug) module installed. 

To run it you need just to:
	node server.js

To display log messages:
	DEBUG=myserver node server.js
