angular.module('XPNS')
    .controller('loginCtrl', function ($scope, mainSvc, $location) {


        $scope.login = {};

        $scope.demoLogin = function () {
            if ($scope.login.username === 'demo' && $scope.login.password === 'demo') {

                mainSvc.changeLoggedIn();

                $location.path('/main');

                $scope.login = {};

            } else {

                $scope.login = {};

                $location.path('/')
            }
        };

    });
