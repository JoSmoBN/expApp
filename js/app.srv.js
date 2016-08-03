angular.module('XPNS')
    .service('mainSvc', function () {

        this.loggedIn = false;

        this.changeLoggedIn = function () {
            this.loggedIn = true;
        };

    });
