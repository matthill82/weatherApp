angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
// setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            // Each tab has its own nav history stack:
            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tab-home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('tab.changecity', {
                url: '/city',
                views: {
                    'tab-cities': {
                        templateUrl: 'templates/tab-cities.html',
                        controller: 'LocationsCtrl'
                    }
                }
            })
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'templates/tab-settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            });
// if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/home');
    });