require.config({
  baseUrl: '/',
  paths: {
    'jquery'        : '../scripts/libs/jquery',
    'underscore'    : '../scripts/libs/underscore',
    'backbone'      : '../scripts/libs/backbone'
  },
 /* shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },*/
  urlArgs: 'bust=' + (new Date()).getTime()
});

require([
  'tests/dummyTest/dummyTest'
  ], mocha.run
);