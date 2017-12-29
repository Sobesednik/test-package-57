const assert = require('assert')
const context = require('../context/')
const testPackage_57 = require('../../src/')

const testPackage_57TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_57, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_57()
        })
    },
}

module.exports = testPackage_57TestSuite
