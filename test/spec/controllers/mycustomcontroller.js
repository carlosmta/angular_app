'use strict';

describe('Controller: MycustomcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var MycustomcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MycustomcontrollerCtrl = $controller('MycustomcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MycustomcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
