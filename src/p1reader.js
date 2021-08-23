module.exports = function(RED) {

    const SP = require('serialport');
    const P1Reader = require('p1-reader');

    function P1ReaderNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        const p1Reader = new P1Reader({
            port: config.port,
            baudRate: config.baudRate,
            parity: config.parity,
            dataBits: config.dataBits,
            stopBits: config.stopBits,
            debug: true
        });

        p1Reader.on('reading', function(data) {
            const msg = {payload: data};
            node.send(msg);
        });

    }
    RED.nodes.registerType("p1reader",P1ReaderNode);

    RED.httpAdmin.get("/p1readerports", RED.auth.needsPermission("arduino.read"), function(req,res) {
        SP.list().then(
            ports => {
                const a = ports.map(p => p.comName);
                res.json(a);
            },
            err => {
                this.log('Error listing serial ports', err)
            }
        )
    });
}