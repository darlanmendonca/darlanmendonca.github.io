'use strict';

angular
  .module('portfolium')
  .controller('HomeController', HomeController);

function HomeController (TileFactory) {
  this.tiles = TileFactory;
}
