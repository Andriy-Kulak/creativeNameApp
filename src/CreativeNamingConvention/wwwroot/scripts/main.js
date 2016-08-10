var require =
{
    baseUrl: 'scripts',
    paths: {
        "creative.module": "modules/creative/creative.module",
        'angular': "../lib/angular/angular.min",
        'angular': "../lib/angular/angular.min",
        'creative.index.controller':'modules/creative/controllers/index.controller',
        'creative.service': 'components/services/creative.service',
        'mediatype.model': 'components/models/mediatype.model',
        'clipboard': '../lib/clipboard/dist/clipboard',
        'ngclipboard': '../lib/ngclipboard/dist/ngclipboard',
        'ui.router': '../lib/angular-ui-router/release/angular-ui-router',
        'ngmessages':'../lib/angular-messages/angular-messages',
        'angular-clipboard': '../lib/angular-clipboard/angular-clipboard',
        'ngAnimate': '../lib/angular-animate/angular-animate',
        'toaster': '../lib/angularjs-toaster/toaster',
        'ui.grid': '../lib/angular-ui-grid/ui-grid',
        'angular.filter': '../lib/angular-filter/dist/angular-filter',
        'ngRoute': "../lib/angular-route/angular-route",

        //LDAP
        "auth.module": "modules/auth/auth.module",
        "auth.factory": "modules/auth/auth.factory",
        "auth.controller": "modules/auth/controllers/auth.controller",
        "door3.css": "../lib/angular-css/angular-css",
        'jquery': "../lib/jquery/dist/jquery",

        //LDAP Test
        "1auth.module": "modules/auth/1auth.module",
        "1auth.factory": "components/services/1auth.factory",
        "1auth.controller": "modules/auth/controllers/1auth.controller"



    },
    shim: {
        "creative.module": {
          deps:[
            'ui.router',            
            'angular-clipboard',
            'ngAnimate',
            'toaster',
            'ui.grid',
            'angular.filter'


          ],
        },
        "angular": {
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular']
        },
        'angular-clipboard': {
            deps: ['angular']
        },
        'ngAnimate': {
            deps: ['angular']
        },
        'toaster': {
            deps: ['angular', 'ngAnimate']
        },
        'ui.grid': {
            deps: ['angular',]
        },
        'uiGridSelection': {
            deps: ['angular']
        },
        'ui.grid.exporter': {
            deps: ['angular']
        },
        "angular.filter": {
            deps: ['angular']
        }
    }
};
