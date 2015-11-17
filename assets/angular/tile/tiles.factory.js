'use strict';

angular
  .module('portfolium')
  .factory('TileFactory', TileFactory);

function TileFactory() {
	return [
		{id: 1, class: 'big'},
		{id: 2},
		{id: 3},
		{id: 4},
		{id: 5},
		{id: 6},
		{id: 7},
		{id: 8, class: 'medium'},
		{id: 9},
		{id: 10},
		{id: 11},
		{id: 12},
		{id: 13},
		{id: 14},
		{id: 15, class: 'medium'},
		{id: 16},
		{id: 17},
		{id: 18},
		{id: 19},
	];
}
