module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
           { pattern: 'lib/angular/angular.js', included: false },
           { pattern: 'lib/angular/angular.min.js', included: false },
           { pattern: 'lib/angular-mocks/angular-mocks.js', included: false },
           { pattern: 'lib/angular-ui-router/release/angular-ui-router.js', included: false },
           { pattern: 'lib/angular-animate/angular-animate.js', included: false },
           { pattern: 'lib/angularjs-toaster/toaster.js', included: false },
           
           { pattern: 'lib/angular-clipboard/angular-clipboard.js', included: false },
           { pattern: 'lib/ngclipboard/dist/ngclipboard.js', included: false },
           { pattern: 'lib/clipboard/dist/clipboard.js', included: false },

           { pattern: 'scripts/modules/**/*.js', included: false },
           { pattern: 'scripts/modules/**/*.map', included: false },
           { pattern: 'scripts/modules/**/*.ts', included: false },

           { pattern: 'scripts/components/**/*.js', included: false },
           { pattern: 'scripts/components/**/*.map', included: false },
           { pattern: 'scripts/components/**/*.ts', included: false },
                      
           { pattern: 'scripts/test/components/**/*.ts', included: false },
           { pattern: 'scripts/test/components/**/*.map', included: false },
           { pattern: 'scripts/test/components/**/*.js', included: false },

           { pattern: 'scripts/test/modules/**/*.ts', included: false },
           { pattern: 'scripts/test/modules/**/*.map', included: false },
           { pattern: 'scripts/test/modules/**/*.js', included: false },

           { pattern: 'scripts/modules/creative/controllers/index.controller.js', included: false },
           { pattern: 'scripts/modules/creative/controllers/index.controller.map', included: false },
           { pattern: 'scripts/modules/creative/controllers/index.controller.ts', included: false },

            'scripts/test/test-main.js',

           //'scripts/components/services/creative.service.spec.js',
           
        ],

        // list of files / patterns to exclude
        exclude: [

        ],

        // web server port
        port: 9999,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        reporters: ['verbose'],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
