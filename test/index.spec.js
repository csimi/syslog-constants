const { expect } = require('chai');
const index = require('../lib');

describe('index', function context () {
	it('exports facility constants', () => {
		return expect(index).to.have.property('facility').that.is.an('object');
	});
	
	it('exports severity constants', () => {
		return expect(index).to.have.property('severity').that.is.an('object');
	});
	
	it('exports flag constants', () => {
		return expect(index).to.have.property('flag').that.is.an('object');
	});
});
