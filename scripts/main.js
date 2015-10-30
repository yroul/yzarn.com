requirejs.config({
    baseUrl: 'scripts/',
    paths: {
       jquery : "libs/jquery",
       underscore : "libs/underscore",
       backbone : "libs/backbone"
    }
    
});


define(function(require){
    var backbone = require('backbone');
    var _ = require('underscore');
    
    var $ = require('jquery');
    console.log($)
    
    $(document).ready(function() {
        console.log('doc ready')
        $(document).on('click', 'a[href^="/"]', function(e) {
           e.preventDefault();
           var href = $(e.currentTarget).attr('href');
           console.log('click ' + href);
           Backbone.history.navigate(href, { trigger: true });
        });
    });
    
    var Router = require('navigation/router');
    
    var appRouter = new Router();
    Backbone.history.start({pushState: true});
    console.log('hello world');

});

