const os = require("os");

const netWorkAdaptersInfo = os.networkInterfaces();

let localAdapter = Object.keys(netWorkAdaptersInfo).map((a) =>
    netWorkAdaptersInfo[a].reduce((prev, curr) =>
        (curr['address'].includes('192')) ||
        (curr['address'].includes('172')) ||
        (curr['address'].includes('10'))  ||
        (curr['address'].includes('127'))
            ? curr : prev, null)
).filter(Boolean);

let localInternetConnection = Object.assign({}, localAdapter)[0];

module.exports = localInternetConnection;
