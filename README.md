# Node red contrib P1 reader

Node red node for reading smartmeter power data from a P1 port serial connection.
This package is based on [Node-P1-reader](https://github.com/ruudverheijden/node-p1-reader). See thas package for more details. 

## How to install:
Run `npm install node-red-contrib-p1reader` or just install it from the Node-red dashboard (manage palette).

## How to use:
This package has one node, and it outputs messages as they come in via the serial connection.
Other than the serial connection itself there is no configuration. 
If you need details on what serial configuration you need for your smartmeter, look at the [readme for the node-p1-reader](https://github.com/ruudverheijden/node-p1-reader) library.

### Input
There are no input nodes.

### Output
The node outputs data messages automatically when they come in over the serial connection. This depends on your meter and can very from every second to onces per 10 seconds or so. There is no configuration setting to change it, but you can ofcourse use the 'delay' node build into node-red to throttle the messages, and the 'rbe' node to pass only messages if a certain value changes.

The format of the output is described on [readme for the node-p1-reader](https://github.com/ruudverheijden/node-p1-reader) library.