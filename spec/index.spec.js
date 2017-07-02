/**
 * Created by macbook on 02/07/17.
 */
'use strict';
const jasmine = require('jasmine-node');
const localInternetConnection = require('../index');


describe("Get-My-Local-IP", () => {
    it("get a valid Ip address", () => { expect(localInternetConnection.address).toMatch(/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$){4}\b/);
    });
    it("get a valid Ip address is a String", () => { expect(localInternetConnection.address).toBeTruthy();
    });
});