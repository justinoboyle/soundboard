var sbApp = angular.module('sbApp', ['ngRoute']);

sbApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: 'assets/partials/home.html',
            controller: 'SimpleController'
        })
        .when('/boards', {
            templateUrl: 'assets/partials/boards.html',
            controller: 'SimpleController'
        })
        .when('/search', {
            templateUrl: 'assets/partials/search.html',
            controller: 'SimpleController'
        })
        .when('/board/', {
            templateUrl: 'assets/partials/board.html',
            controller: 'SimpleController'
        })
        .when('/b/', {
            templateUrl: 'assets/partials/board.html',
            controller: 'SimpleController'
        })
        .when('/user/', {
            templateUrl: 'assets/partials/user.html',
            controller: 'SimpleController'
        })
        .when('/u/', {
            templateUrl: 'assets/partials/user.html',
            controller: 'SimpleController'
        })
        .otherwise({ redirectTo: '/' });
    
     $routeProvider.otherwise({ redirectTo: function(current, path, search) {
        if(search.goto) {
            return '/' + search.goto;
        }
        return '/'
    }
 });
}]);

var controllers = {};

controllers.SimpleController = function($scope) {
    
};

sbApp.controller(controllers);

include.processPage(function(div) {
    try {
    if(div.id === "navbar") {
       include.loadGeneric("assets/navbar.html", function(data) {
           div.innerHTML = data;
       });
    }
    }catch(e){}
});

include.loadGeneric("assets/navbar.html", function(data) {
   $('#navbar').html(data);
});
