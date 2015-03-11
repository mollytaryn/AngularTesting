angular
  .module('tas')
  .controller('AuthController', AuthController)

function AuthController($scope, $location, BASE_URL) {
  var vm = this;

  vm.login = function() {
    var fb = new Firebase(BASE_URL);

    fb.authWithPassword({
      email: vm.email,
      password: vm.password
    }, function(err, authData) {
      if (err) {
        console.log(err);
      } else {
        console.log('You did it!', authData);
        $location.path('/tas');
        $scope.$apply();
      }
    });
  };

  vm.register = function() {
  var fb = new Firebase(BASE_URL);

    fb.createUser({
      email: vm.email,
      password: vm.password
    }, function(err, authData) {
      if (err) {
        console.log(err);
      } else {
        console.log('You did it!', authData);
        vm.login();
      }
    });
  };
}