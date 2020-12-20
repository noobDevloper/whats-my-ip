const { rejects } = require('assert');
const http = require('http');
const options = {
    host: 'www.google.com',
};
const getIpAddress = () => {
    return new Promise((resolve, rej) => {
        const req = http.get(options);
        req.end();
        req.once('response', (res) => {
            const ip = req.socket.localAddress;
            const port = req.socket.localPort;
            console.log(`Your IP address is ${ip} and your source port is ${port}.`);
            resolve({
                ip: ip,
                port: port,
                date: new Date()
            });
        });
        req.on('error', e => {
            rejects({
                ip: 0,
                port: 0,
                date: new Date()
            })
        })
    });
}