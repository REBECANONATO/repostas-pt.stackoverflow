(function () {
  'use strict';
  angular
      .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    this.chipText = [{id: 5, descricao: "Futebol"}, {id: 6, descricao: "Basquete"}]
  }
})();