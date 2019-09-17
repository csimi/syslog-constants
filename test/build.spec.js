const { expect } = require('chai');
const build = require('../lib/build');

describe('build', function context () {
	it('builds an object from an array of codes and keywords', () => {
		const value = build([
			['foo', 'bar'],
			['foobar'],
		], (index) => index * 2);
		
		return expect(value).to.eql({
			'0': 'foo',
			'2': 'foobar',
			'foo': 0,
			'bar': 0,
			'foobar': 2,
		});
	});
});
