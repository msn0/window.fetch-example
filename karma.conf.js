module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'spec/**/*-spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'spec/**/*-spec.js': ['browserify']
    },
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/'},
        {type: 'text-summary'},
        {type: 'text'},
        {type: 'cobertura'}
      ]
    },

    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      transform: ['istanbulify']
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-jasmine',
      'karma-browserify',
      'karma-coverage'
    ],
    singleRun: true
  });
};
	