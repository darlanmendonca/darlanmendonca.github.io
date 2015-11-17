'use strict';

describe('HomeController', function() {
	beforeEach(module('portfolium'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	it('property tiles should be an Array', function() {
		var HomeController = $controller('HomeController');
		expect(HomeController.tiles).to.be.a('array');
	});
});
