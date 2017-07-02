'use strict';

const os = require("os");


const http = require("http");

const netWorkAdaptersInfo = os.networkInterfaces();

const local = { address: '127.0.0.1',
    netmask: '255.0.0.0',
    family: 'IPv4',
    mac: '00:00:00:00:00:00',
    internal: true };


let localAdapter = Object.keys(netWorkAdaptersInfo).map((a) =>
    netWorkAdaptersInfo[a].reduce((prev, curr) =>
        (curr['address'].includes('192')) ||
        (curr['address'].includes('172')) ||
        (curr['address'].includes('10'))
            ? curr : prev, null)
).filter(Boolean);

let localInternetConnection = Object.assign({}, localAdapter)[0];

module.exports = localInternetConnection;




