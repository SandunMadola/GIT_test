var homeCtrls = angular.module('homeCtrls', []);

homeCtrls.controller('homeCtrl', ['$scope', function ($scope) {

    }]);

homeCtrls.controller('deviceCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('js/data.json').success(function (data) {
            $scope.devices = data;

        });
    }]);

homeCtrls.controller('detailsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('js/data.json').success(function (data) {
            $scope.devices = data;
            $scope.whichItem = $routeParams.itemId;
        });
    }]);

homeCtrls.controller('requestCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.some = "This is Request page";
        $scope.update = angular.copy.request;
        
        var data = {Name: "Kamal"};
        $http.post('js/request.json', data).then(function (data) {
            alert("task added");
            //$scope.msg = 'Data saved';
        });
    }]);
//
//homeCtrls.controller('toggleCtrl',['$scope', function($scope){
//        $scope.custom = true;
//        $scope.toggleCustom = function() {
//            $scope.custom = $scope.custom === false ? true: false;
//        };
//}]);