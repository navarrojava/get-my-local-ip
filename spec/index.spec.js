/**
 * Created by macbook on 02/07/17.
 */

const localInternetConnection = require('../index');



describe("Get-My-Local-IP", function() {
    it("get a valid Ip address", function() {
        expect(localInternetConnection.address).toMatch(/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$){4}\b/);
    });
});