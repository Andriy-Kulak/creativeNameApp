﻿
var libRoot = '../lib/';

requirejs.config({
    paths: {
        // External libraries
        'angular': "/base/lib/angular/angular",
        'angular-mocks': '../lib/angular-mocks/angular-mocks',
        'creative.module': 'modules/creative/creative.module',
        'IndexCtrl': 'modules/creative/controllers/index.controller',
        'creative.service': 'components/services/creative.service',
        'mediatype.model': 'components/models/mediaType.model',
        'creativenamingconvention.model': 'components/models/creativenamingconvention.model',        
        'ui.router': '../lib/angular-ui-router/release/angular-ui-router',
        'clipboard': '../lib/clipboard/dist/clipboard',
        'ngclipboard': '../lib/ngclipboard/dist/ngclipboard',
        'angular-clipboard': '../lib/angular-clipboard/angular-clipboard',
        'angular-animate': '../lib/angular-animate/angular-animate',
        'angular-toaster': '../lib/angularjs-toaster/toaster',
        
        //register your tests here        
        'index.ctrl.spec': '/base/scripts/test/components/controllers/index.controller.spec',
        //'admin.index.ctrl.spec': '/base/scripts/modules/admin/controllers/index.controller.spec',
        'creative.service.spec': '/base/scripts/test/components/services/creative.service.spec',
        'creative.model.spec': '/base/scripts/test/components/models/creative.model.spec'
    },
    baseUrl:'/base/scripts',
    shim: {
        'angular': {
          'exports': 'angular'
        },
        'admin.index.ctrl.spec': {
             deps: ['creative.module', 'angular-mocks'] 
        },
        'index.ctrl.spec': {
             deps: ['creative.module', 'angular-mocks'] 
        },
        'creative.service.spec': {
             deps: ['creative.module', 'angular-mocks'] 
        },
        'creative.model.spec': {
             deps: ['angular', 'angular-mocks'] 
        },
        'creative.module': {
          deps: [     
            'angular',      
            'angular-clipboard',
            'ngclipboard',
            'clipboard',
            'angular-mocks',
            'ui.router',
            'angular-animate',
            'angular-toaster'   
          ],
          exports: "app"
        },
        'angular-toaster' : {  
            deps: ['angular']
        },
        'ui.router': {
            deps: ['angular']
        },
        'angular-clipboard': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'ngclipboard': {
            deps: ['angular']
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'admin.module': {
            deps: [
              'angular-mocks'
            ],
            exports: "app"
        }

    },

    // Ask Require.js to load these files (all our tests).
    deps: [
        //'admin.index.ctrl.spec',
        'index.ctrl.spec',
        'creative.model.spec',
        'creative.service.spec'
    ],

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});