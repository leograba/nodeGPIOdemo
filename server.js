/**
 Node.js GPIO. Handles GPIO configuration and access.
 
 This app is a demo example of how to use Node.js to access 
 and control the Toradex Colibri VF61 GPIO.
 */

/* Modules */
var fs = require('fs'); //module to handle the file system
var debug = require('debug')('myserver'); //debug module

/* VF61 GPIO pins */
const	LED1 = '47', // PTC2, 101(SODIMM), 16(IRIS)
		LED2 = '50', // PTC5, 97(SODIMM), 17(IRIS)
		LED3 = '53', // PTC8, 85(SODIMM), 18(IRIS)
		SW1 = '46', // PTC1, 98(SODIMM), 13(IRIS)
		SW2 = '88', // PTC9, 133(SODIMM), 14(IRIS)
		SW3 = '48'; // PTC3, 103(SODIMM), 15(IRIS)

/* Constants */
const HIGH = 1, LOW = 0;

//starting app
debug('Starting VF61 GPIO control'); //Hello message

setImmediate(function cfgOurPins(){
	cfGPIO(LED1, 'out'); //call cfGPIO to configure pins
	cfGPIO(LED2, 'out');
	cfGPIO(LED3, 'out');
	cfGPIO(SW1, 'in');
	cfGPIO(SW2, 'in');
	cfGPIO(SW3, 'in');
	setInterval(copySwToLed, 50); //poll the GPIO and copy switches status to LEDs
});

function cfGPIO(pin, direction){
/*---------- export pin if not exported and configure the pin direction -----------*/
        fs.access('/sys/class/gpio/gpio' + pin, fs.F_OK, function(err){//test if current GPIO file exist
                if(err){ //if GPIO isn't exported, do it
                        debug('exporting GPIO' + pin);
                        fs.writeFileSync('/sys/class/gpio/export', pin);//export pin
                }
                debug('Configuring GPIO' + pin + ' as ' + direction);
                fs.writeFileSync('/sys/class/gpio/gpio' + pin + '/direction', direction);
        });
}

function rdGPIO(pin){
/*---------- read GPIO value and return it -----------*/
	return fs.readFileSync('/sys/class/gpio/gpio' + pin + '/value');
}

function wrGPIO(pin, value){
/*---------- write value to corresponding GPIO -----------*/
	fs.writeFileSync('/sys/class/gpio/gpio' + pin + '/value', value);
}

function copySwToLed(){
/********* Copy the sw values into the LEDs  *********/
        var state_now; //temporary sw value
        
        debug('Polling the GPIO. Copying SWs state to respective LEDs\r');

        state_now = 1 - rdGPIO(SW1); //read pushbutton 1 and invert its value...
        wrGPIO(LED1,state_now); //...then copy its value to LED 1
        state_now = 1 - rdGPIO(SW2); //read pushbutton 2 and invert its value...
        wrGPIO(LED2,state_now); //...then copy its value to LED 2
        state_now = 1 - rdGPIO(SW3); //read pushbutton 3 and invert its value...
        wrGPIO(LED3,state_now); //...then copy its value to LED 3
}
