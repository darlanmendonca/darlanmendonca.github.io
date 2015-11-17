'use strict';

describe('TileFactory', function() {
	beforeEach(module('portfolium'));

	var $factory;

	beforeEach(inject(function(_TileFactory_){
		$factory = _TileFactory_;
	}));

	describe('test factory data', function() {
		it('should be an Array', function() {
			var TileFactory = $factory;
			expect(TileFactory).to.be.a('array');
		});
	});
});
