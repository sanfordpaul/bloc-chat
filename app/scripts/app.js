(function() {

    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomsCtrl as rooms',
                templateUrl: '/templates/home.html'
            })

            .state('modal', {
                url: '/modal',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            });
    }


    angular
         .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
         .config(config);

 })();
