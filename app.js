(function() {

    var validator = angular.module("validator", []);

    validator.controller("FormController", ["$scope", function($scope) {

        $scope.register = function() {
            $scope.successfullySubmitted = true;
        }

    }]);

})();